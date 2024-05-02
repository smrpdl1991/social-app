import { useEffect, useState } from "react";
import HeaderSearchForm from "../../component/header/HeaderForm";
import HeaderLogo from "../../component/header/HeaderLogo";
import SubDropdown from "../../component/header/toggleDropdown";
import { collection, query, getDocs, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const Header = () => {
 
        const auth = getAuth();
console.log(auth.currentUser?.uid);


useEffect(() => {
const getUserData = async () => {
    const userRef = await doc(firestore, 'users', auth.currentUser?.uid); 
    const userDoc = await getDoc(userRef);// can't use "where" here
    console.log(userDoc.data());
}

getUserData();

}, []);
    return (<>
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <HeaderLogo />
                    <HeaderSearchForm />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto navbar-list">
                            fdsf
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </>)
}
export default Header;