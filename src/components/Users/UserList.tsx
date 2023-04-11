import { IUser } from "../../model/user";
import Container from "../Container/Container";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

interface IUsersProps {
    users: IUser[];
 }

const UserList = ({users}:IUsersProps)=>{

    const navigate=useNavigate();

    return (
        <Container>
        {users.map((user, i) => (
            <>
                <UserItem
                    key={i}
                    user={user}
                    type="LIST"
                    handleClick={()=>navigate(`/users/${user?.id}`)}
                />
                <hr/>
            </>
                ))}
                </Container>
    )
}

export default UserList;