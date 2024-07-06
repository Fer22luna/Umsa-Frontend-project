import { TypeTurno } from "../models/types/TypeTurno";
import { createTurno, fetchTurnos } from "./axios.service";

export class TurnoService {
    static async getTurnos(): Promise<TypeTurno[]> {
        try {
            const response = await fetchTurnos();
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al obtener los turnos');
        }
    }

    static async createTurno(turno: TypeTurno): Promise<TypeTurno> {
        try {
            const response = await createTurno(turno);
            console.log(response)
            return response;
        } catch (error) {
            console.error(error);
            throw new Error('Error al crear turno');
        }
    }
}