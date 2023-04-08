import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const Auth = () => {
    const { isAuthenticated } = useContext(AuthContext);
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/unAuth" />

};

export default Auth;