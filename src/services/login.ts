import { ILogin } from "../model/login";

export const login = async (axiosInstance: any, data: ILogin) => {
    try {
        const response = await axiosInstance.post(`/login`, data);
        return response;
    } catch (error) {

    }
}