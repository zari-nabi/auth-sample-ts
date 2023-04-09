import { IChildren } from "../../model/model";
import "./Button.style.scss";

const Button = ({children}:IChildren)=>{
    return (
        <button className="button">{children}</button>
    )
};

export default Button;