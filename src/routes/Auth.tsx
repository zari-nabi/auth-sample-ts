import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
    const isAuthorized = true;
    return isAuthorized ? <Outlet /> : <Navigate to="/unAuth" />

};

export default Auth;