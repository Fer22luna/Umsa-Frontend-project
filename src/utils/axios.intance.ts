import axios from "axios";


//const baseURL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8080';
// ver tambien archivo para el tipado

const baseURL = "http://localhost:8080"; // ver de hacerlo en import.meta.env.BASE_URL

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