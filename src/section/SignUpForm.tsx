import { useForm } from "react-hook-form";
import InputField from "../component/InputField";
import { registerSchema } from "../schema/inputFieldSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";
import { hashPassword } from "../utils/hash";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            registerName: "",
            registerEmail: "",
            registerPassword: "",
            terms: false,
        },
    });

    const auth = getAuth();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
        const { registerName, registerEmail, registerPassword, terms } = data;
        if (!terms) {
            toast.error("Please accept the terms and conditions");
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            if (user) {
                // Hash the password before storing it
                const hashedPassword = await hashPassword(registerPassword);

                await addDoc(collection(firestore, "users"), {
                    uid: user.uid,
                    displayName: registerName,
                    email: registerEmail,
                    password: hashedPassword,
                });
                updateProfile(user, {
                    displayName: registerName
                });
                reset();
                toast.success("User created successfully");
                navigate("/sign-in");
            }
        } catch (error: any) {
            toast.error("Error creating user:", error);
        }
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <InputField
                id="registerName"
                type="text"
                placeholder="Full Name"
                label="Full Name"
                hasError={!!errors.registerName}
                errorMessage={errors.registerName?.message?.toString() ?? ""}
                {...register("registerName")}
            />
            <InputField
                id="registerEmail"
                type="text"
                placeholder="Email address"
                label="Email address"
                hasError={!!errors.registerEmail}
                errorMessage={errors.registerEmail?.message?.toString() ?? ""}
                {...register("registerEmail")}
            />
            <InputField
                id="registerPassword"
                type="password"
                placeholder="Password"
                label="Password"
                hasError={!!errors.registerPassword}
                errorMessage={errors.registerPassword?.message?.toString() ?? ""}
                {...register("registerPassword")}
            />
            <div className="d-inline-block w-100">
                <div className="form-check d-inline-block mt-2 pt-1">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        {...register("terms")}
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                        I accept Terms and Conditions
                    </label>
                </div>
                <button type="submit" className="btn btn-primary float-end">
                    Sign Up
                </button>
            </div>
            <div className="sign-info">
                <span className="dark-color d-inline-block line-height-2">
                    Already have an account? <a href="/sign-in">Sign In</a>
                </span>
            </div>
        </form>
    );
};

export default SignUpForm;
