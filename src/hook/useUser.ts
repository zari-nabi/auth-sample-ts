import { useEffect, useState } from "react"
import { IUser } from "../model/user";
import { getUsers } from "../services/getUsers";
import useAxios from "./useAxios";

export const useUser=()=>{
     const [users, setUsers] = useState<IUser[]>([]);
    const axiosInstance = useAxios();

    useEffect(()=>{
        (async function(){
            const response = await getUsers(axiosInstance);
            response && setUsers(response?.data?.data);
        })();
    },[]);

    return {users};
};