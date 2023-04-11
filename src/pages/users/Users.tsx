import Container from "../../components/Container/Container";
import UserList from "../../components/Users/UserList";
import { useUser } from "../../hook/useUser";

const Users = () => {
    const { users } = useUser();

    return (
        <Container>
            {users.length > 0 && <UserList users={users}  />}
        </Container>
    )
};

export default Users;