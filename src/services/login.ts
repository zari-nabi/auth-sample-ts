import { ILogin } from "../model/login";

export const login = (axiosInstance:any,data:ILogin)=>{
    try {
        const response = axiosInstance.post(`/login`,data);
        return response;
    } catch (error) {
        
    }
}