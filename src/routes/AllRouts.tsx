import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import UnAuth from "../pages/unAuth/UnAuth";
import UserDetail from "../pages/users/UserDetail";
import Users from "../pages/users/Users";
import Auth from "./Auth";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<Auth />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users">
                    <Route index element={<Users />} />
                    <Route path=":id" element={<UserDetail />} />
                </Route>
            </Route>
            <Route path="/unauth" element={<UnAuth />} />
            <Route path="/not-found" element={<NotFound />} />
        </Routes>
    )
};

export default AllRoutes;