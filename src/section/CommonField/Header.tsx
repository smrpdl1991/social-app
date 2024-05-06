import HeaderSearchForm from "../../component/header/HeaderForm";
import HeaderLogo from "../../component/header/HeaderLogo";
import SubDropdown from "../../component/header/toggleDropdown";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const Header = () => {
 
        const auth = getAuth();
        const [user, loading, error] = useAuthState(auth);

    return (<>
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <HeaderLogo />
                    <HeaderSearchForm />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto navbar-list">
                            <li className="">
                                {user?.displayName ?? ""}
                                <SubDropdown />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>)
}
export default Header;