import { useNavigate } from "react-router-dom";
import SignInDetails from "../../section/SignInDetails";
import SignUpForm from "../../section/SignUpForm";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            {user ? navigate("/") :
                <div className="wrapper">
                    <section className="sign-in-page">
                        <div className="container p-0">
                            <div className="row no-gutters">
                                <div className="col-md-6 text-center pt-5">
                                    <SignInDetails />
                                </div>
                                <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                                    <div className="sign-in-from">
                                        <h1 className="mb-0">Sign Up</h1>
                                        <p>
                                            Enter your email address and password to access admin panel.
                                        </p>
                                        <SignUpForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    );
};

export default SignUp;
