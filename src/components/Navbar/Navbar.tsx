
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import "./Navbar.style.scss";

const Navbar = () => {
    const { isAuthenticated,handleLogout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/" className="link">Home</Link>
                {isAuthenticated ?
                    <>
                        <Link to="/dashboard" className="link">Dashboard</Link>
                        <Link to="/users" className="link">Users</Link>
                    </>
                    : null
                }
            </div>
            <div className="navbar__right">
                {isAuthenticated ?
                    <a onClick={handleLogout} className="link">Logout</a>
                    :
                    <Link to="/login" className="link">Login</Link>
                }
            </div>
        </div>
    )
};

export default Navbar;