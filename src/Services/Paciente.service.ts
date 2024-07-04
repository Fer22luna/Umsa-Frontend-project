import { TPaciente } from "../models/types/TPaciente";
import { createPaciente, fetchPacientes } from "./axios.service";


export class PacienteService {
    static async getPacientes(): Promise<TPaciente[]> {
        try {
            const response = await fetchPacientes();
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al obtener los pacientes');
        }
    }

    static async createPaciente(paciente: TPaciente): Promise<TPaciente> {
        try {
            const response = await createPaciente(paciente);
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al crear paciente');
        }
    }
}