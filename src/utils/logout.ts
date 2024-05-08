import { getAuth, signOut } from "@firebase/auth";
import { toast } from "react-toastify";


const auth = getAuth();
export const logout = () => {
    signOut(auth).then(() => {
        toast.success("User logged out successfully");
    }).catch((error) => {
        toast.success("Error Logging out : ", error?.message);
    });
}