import { Api } from "./api/api";
// import { Ddd } from "interfaces"

const getAll = () => Api.get<object[]>('/ddd')
const getById = () => Api.get('/ddd/:id')


export const apiService = {
    getAll,
    getById,
}