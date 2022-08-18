import { AxiosError } from "axios";


export const errorIntercptor = (error: AxiosError) => {
    if(error.message === 'Network error') {
        return Promise.reject(new Error('Erro de conexão'));
    }

    // if(error.response?.status === 401) {
    //     return Promise.reject(new Error('Erro de conexão'));
    // }

    return Promise.reject(error);
}