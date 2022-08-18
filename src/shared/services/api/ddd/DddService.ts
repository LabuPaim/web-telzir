import axios from "axios";
import { Api } from "../api";


const getAll = async () => {    

    try {
        const  {data}  = await Api.get('/ddd')        
        return data
        
    } catch (error) {
        return error
    }
};


const getById = async (id: string): Promise<any> => {
    try {
        const { data } = await Api.get(`/ddd/${id}`)
        console.log('Estou aqui', data.data)
        
    } catch (errorIntercptor) {
    }

};

export const DddService ={
    getAll,
    getById

}