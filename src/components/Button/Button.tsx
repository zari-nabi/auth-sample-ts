import "./Button.style.scss";

interface IButtonProps {
    children: React.ReactNode;
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButtonProps> = ({ children, handleClick }) => {
    return (
        <button className="button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(e)}>{children}</button>
    )
};

export default Button;