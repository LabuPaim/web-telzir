import { Api } from "./api/api";
// import { Ddd } from "interfaces"

const getAllDdd = () => Api.get<object[]>('/ddd')
const getByIdDdd = () => Api.get('/ddd/:id')
const getAllPlan = () => Api.get<object[]>('/plan')
const getByIdPlan = () => Api.get('/plan/:id')



export const apiService = {
    getAllDdd: getAllDdd,
    getByIdDdd: getByIdDdd,
    getAllPlan: getAllPlan,
    getByIdPlan: getByIdPlan,
}