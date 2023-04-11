import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Snipper from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { ILogin } from "../../model/login";
import { login } from "../../services/login";
import "./Login.style.scss";

//=============================
/**
 * The Login component displays the Login component.
 * @returns {JSX.Element} The Login component.
 */
//==============================

const Login = () => {
    const { handleLogin } = useAuth();

    const [formData, setFormData] = useState<ILogin>({ email: "", password: "" });
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const axiosInstance = useAxios();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const response = await login(axiosInstance, formData);
        setLoading(false);
        response && handleLogin(response?.data?.token);
        !response && toast.error('Login Failed');
    }

    return (
        <Container>
            <Snipper loading={loading} />
            <form onSubmit={handleSubmit}>
                <div className="login">
                    <Input
                        name="email"
                        value={formData?.email}
                        label="Email"
                        onChange={handleChange}
                        required={true}
                        type="text"
                        textError="required"
                    />
                    <Input
                        name="password"
                        value={formData?.password}
                        label="Password"
                        onChange={handleChange}
                        required={true}
                        type="password"
                        textError="required"
                    />
                    <Button handleClick={() => { }}>Login</Button>
                </div>
            </form>
            <p>This app use mock api. sample email and password is:</p>
            <p>email: "eve.holt@reqres.in"</p>
            <p>password: "cityslicka"</p>
        </Container>
    )
};

export default Login;