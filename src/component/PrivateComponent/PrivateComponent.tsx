// PrivateRoute.tsx
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    if (loading) return (<section className='sign-in-page'><div id="container-inside"><div id="circle-small"></div><div id="circle-medium"></div><div id="circle-large"></div><div id="circle-xlarge"></div><div id="circle-xxlarge"></div></div></section>);
    if (!user) { navigate("/sign-in"); }

    return <>{element}</>;
};

export default PrivateRoute;
