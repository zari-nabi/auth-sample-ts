import {  useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import useAuth from "../../hook/useAuth";
import { ILogin } from "../../model/login";
import { login } from "../../services/login";
import "./Login.style.scss";

const Login = () => {
    const { handleLogin } = useAuth();

    const [formData, setFormData] = useState<ILogin>({ email: "", password: "" });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(formData);
        response && handleLogin(response?.data?.token);
        !response && toast.error('Login Failed');
    }

    return (
        <Container>
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
                    <Button>Login</Button>
                </div>
            </form>
            <p>This app use mock api. sample email and password is:</p>
            <p>email: "eve.holt@reqres.in"</p>
            <p>password: "cityslicka"</p>
        </Container>
    )
};

export default Login;