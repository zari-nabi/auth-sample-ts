import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Auth = () => {
    const { isAuthenticated } = useAuth();
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/unAuth" />

};

export default Auth;