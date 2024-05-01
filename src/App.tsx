
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import PrivateRoute from './component/PrivateComponent/PrivateComponent';
import Header from './section/CommonField/Header';
import SideNav from './section/CommonField/SideNav';
import RightNav from './section/CommonField/RightNav';
import RoutesComponent from './component/Routes';

function App() {

    return (
        <div className="App wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/*"
                        element={
                            <>
                                <PrivateRoute element={<Header />} />
                                <PrivateRoute element={<SideNav />} />
                                <PrivateRoute element={<RightNav />} />
                                <PrivateRoute element={<div id="content-page" className='content-page'><RoutesComponent /></div>} />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
