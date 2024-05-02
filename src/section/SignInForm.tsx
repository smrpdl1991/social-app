
import { useForm } from "react-hook-form";
import InputField from "../component/InputField";
import { loginSchema } from "../schema/inputFieldSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            loginEmail: "",
            loginPassword: "",
            remember_me: false,
        },
    });
    const auth = getAuth();
    const navigate = useNavigate();
    const onSubmit = (data: any) => {
        const { loginEmail, loginPassword, remember_me } = data;
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User:", user);
                navigate("/");
                toast.success("User logged in successfully");
                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error("Error:", errorMessage);
            });
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <InputField
                id="loginEmail"
                type="text"
                placeholder="Email address"
                label="Email address"
                hasError={!!errors.loginEmail}
                errorMessage={errors.loginEmail?.message?.toString() ?? ""}
                {...register("loginEmail")}
            />
            <InputField
                id="loginPassword"
                type="password"
                placeholder="Password"
                label="Password"
                hasError={!!errors.loginPassword}
                errorMessage={errors.loginPassword?.message?.toString() ?? ""}
                {...register("loginPassword")}
            />
            <div className="d-inline-block w-100">
                <div className="form-check d-inline-block mt-2 pt-1">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember_me"
                        {...register("remember_me")}
                    />
                    <label className="form-check-label" htmlFor="remember_me">
                        Remember Me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary float-end">
                    Sign in
                </button>
            </div>
            <div className="sign-info">
                <span className="dark-color d-inline-block line-height-2">
                    Don't have an account? <a href="/sign-up">Sign up</a>
                </span>
            </div>
        </form>
    );
};

export default SignInForm;
