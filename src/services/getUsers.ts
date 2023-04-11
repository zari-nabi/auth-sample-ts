
export const getUsers = (axiosInstance: any) => {
    try {
        const response = axiosInstance.get(`/users`);
        return response;
    } catch (error) {

    }
};

export const getUserDetail = async(axiosInstance: any, id?: string) => {
    try {
        const response = await axiosInstance.get(`/users/${id}`);
        return response;
    } catch (error) {

    }
}