import { TDoctor } from "../models/types/TDoctor";
import { fetchDoctores } from "./axios.service";


export class DoctorService {
    static async getDoctores(): Promise<TDoctor[]> {
        try {
            const response = await fetchDoctores();
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al obtener los pacientes');
        }
    }
}