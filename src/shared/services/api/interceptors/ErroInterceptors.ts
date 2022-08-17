import { AxiosError } from "axios";


export const errorIntercptor = (error: AxiosError) => {
    if(error.message === 'Network error') {
        return Promise.reject(new Error('Erro de conexão'));
    }
}