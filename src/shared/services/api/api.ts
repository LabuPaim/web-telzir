import axios from "axios";
import { Environment } from "shared/environment";
import { errorIntercptor, responseIntercptor } from "./interceptors";

const Api = axios.create({
    baseURL: Environment.URL_BASE
})

export { Api };