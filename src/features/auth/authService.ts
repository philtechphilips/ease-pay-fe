import axios, { AxiosResponse } from "axios";

interface UserData {
 username: string,
 password: string
}

const API_URL = "http://localhost:8000";

const register = async (userData: UserData): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.post(API_URL + "/auth/register", userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const login = async (userData: UserData): Promise<any> => {
    const response: AxiosResponse<any> = await axios.post(API_URL + '/auth/login', userData);

    if (response.data) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
    }

    return response.data;
};

const logout = async (): Promise<void> => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("user");
    }
};

const authService = {
    register,
    logout,
    login
};

export default authService;
