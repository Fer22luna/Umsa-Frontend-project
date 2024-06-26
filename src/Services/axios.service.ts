import { AxiosInstanceBase } from "../utils/axios.intance";

export const fetchPacientes = async () => {
    try {
        const response = await AxiosInstanceBase.get("/pacientes");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}