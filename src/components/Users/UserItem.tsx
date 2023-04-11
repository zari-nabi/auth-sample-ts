import { IUser } from "../../model/user";
import Button from "../Button/Button";
import "./Users.style.scss";

interface IUserItemProps {
    user?: IUser;
    type: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id?: string) => void
}

const UserItem = ({ user, type, handleClick }: IUserItemProps) => {
    const { id, avatar, first_name, last_name, email } = user || {};
    return (
        <div className={type === "LIST" ? "list" : "detail"}>
            <img src={avatar} />
            <h3> name: {`${first_name} ${last_name}`}  </h3>
            <h4> email: {email} </h4>

            <Button handleClick={(event) => handleClick(event, id)}>{type === "LIST" ? "details" : "close"}</Button>
        </div>
    )
};

export default UserItem;