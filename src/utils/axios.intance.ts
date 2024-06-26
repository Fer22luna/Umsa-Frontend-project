import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';


if(!baseURL){
    throw new Error('REACT_APP_BASE_URL is not defined');
}

export const AxiosInstanceBase = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});