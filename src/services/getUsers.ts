import axios from "axios"
import { baseUrl } from "./baseUrl"

export const getUsers = ()=>{
    try {
        const response = axios.get(`${baseUrl}/api/users`);
        return response;
    } catch (error) {
        
    }
}