import useAxios from "../hook/useAxios";
import { ILogin } from "../model/login";

const axiosInstance=useAxios();

export const login = (data:ILogin)=>{
    try {
        const response = axiosInstance.post(`/login`,data);
        return response;
    } catch (error) {
        
    }
}