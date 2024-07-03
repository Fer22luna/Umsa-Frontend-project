import { TPaciente } from "../models/types/TPaciente";
import { AxiosInstanceBase } from "../utils/axios.intance";

export const fetchPacientes = async ():  Promise<TPaciente[]>  => {
    try {
        const response = await AxiosInstanceBase.get("api/paciente/all");
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los pacientes');
    }
}