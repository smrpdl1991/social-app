// PrivateRoute.tsx
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  // if(isAuthenticated ){
//   if (!localStorage.getItem('authToken')) {
//     return <Navigate to="/login" />;
//   }

  // return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
  return <>{element}</>;
};

export default PrivateRoute;
