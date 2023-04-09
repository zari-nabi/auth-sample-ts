import { IInput } from "../../model/input";
import "./Input.style.scss";

const Input = ({ label, name, value, onChange, required, type, error, textError }: IInput) => {
    return (
        <>
            <label className="label">
                {label}
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={(event) => onChange(event)}
                    required={required}
                    type={type}
                    className="input"
                />
            </label>
            {error ? <label>{textError}</label> : null}
        </>
    )
};

export default Input;