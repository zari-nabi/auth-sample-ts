import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import Spinner from "../../components/Spinner/Spinner";
import UserItem from "../../components/Users/UserItem";
import useAxios from "../../hook/useAxios";
import { IUser } from "../../model/user";
import { getUserDetail } from "../../services/getUsers";

const UserDetail = () => {
    const { id } = useParams();
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>();
    const [loading, setLoading] = useState<boolean>();

    const handleGetUserDetail = async () => {
        setLoading(true);
        const response = await getUserDetail(axiosInstance, id);
        setLoading(false);
        response && setUser(response?.data?.data)
    }

    useEffect(() => {
        handleGetUserDetail();
    }, []);

    const handleClick = () => {
        navigate("../")
    }

    return (
        <Container>
            <Spinner loading={loading}/>
            <UserItem
                key={id}
                user={user}
                type="DETAIL"
                handleClick={handleClick}
            />
        </Container>
    )
};

export default UserDetail;