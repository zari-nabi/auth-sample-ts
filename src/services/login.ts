import axios from "axios"
import { ILogin } from "../model/login";
import { baseUrl } from "./baseUrl"

export const login = (data:ILogin)=>{
    try {
        const response = axios.post(`${baseUrl}/login`,data);
        return response;
    } catch (error) {
        
    }
}