import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";

/**
 * Auth routes
 * @returns {JSX.Element} - The content to be displayed inside the route if is logined.
 */

const Auth = () => {
    const { isAuthenticated } = useAuth();
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/unAuth" />

};

export default Auth;