import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
        </Routes>
    );
}

export default RoutesComponent;