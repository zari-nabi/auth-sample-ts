import Container from "../../components/Container/Container";
import UserList from "../../components/Users/UserList";
import { useUser } from "../../hook/useUser";

//=======================================
/**
 * A component that displays a list of users and allows for viewing user details.
 * @returns {JSX.Element} The Users component.
 */
//=======================================

const Users = () => {
    const { users } = useUser();

    return (
        <Container>
            {users.length > 0 && <UserList users={users}  />}
        </Container>
    )
};

export default Users;