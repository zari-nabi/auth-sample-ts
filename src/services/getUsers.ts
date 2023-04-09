import useAxios from "../hook/useAxios";

const axiosInstance = useAxios();

export const getUsers = ()=>{
    try {
        const response = axiosInstance.get(`/users`);
        return response;
    } catch (error) {
        
    }
}