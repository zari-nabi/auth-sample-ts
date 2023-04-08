import { createContext, useState } from "react";
import { IAuthContect, IAuthProvider } from "./models";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IAuthContect>({
    isAuthenticated: false,
    handleLogin: () => { },
    handleLogout: () => { }
});

const AuthProvider = ({ children }: IAuthProvider) => {
    const navigate = useNavigate();

    const isAuth = !!localStorage.getItem("token");
    const [isAuthenticated, setIsAuthenticated] = useState(isAuth);

    const handleLogin = (token: string) => {
        setIsAuthenticated(true);
        localStorage.setItem("token", token);
        navigate("/dashboard");
    };
    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;