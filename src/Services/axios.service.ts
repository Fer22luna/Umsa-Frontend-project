import { TDoctor } from "../models/types/TDoctor";
import { TPaciente } from "../models/types/TPaciente";
import { TypeTurno } from "../models/types/TypeTurno";
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


export const createPaciente = async (paciente : TPaciente):  Promise<TPaciente>  => {
    try {
        const response = await AxiosInstanceBase.post("api/paciente/crear",paciente);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear paciente los pacientes');
    }
}

export const fetchDoctores = async ():  Promise<TDoctor[]>  => {
    try {
        const response = await AxiosInstanceBase.get("api/doctor/list");
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los doctores');

    }
}

export const createDoctor = async (doctor : TDoctor):  Promise<TDoctor>  => {
    try {
        const response = await AxiosInstanceBase.post("api/doctor/create",doctor);
export const fetchTurnos = async ():  Promise<TypeTurno[]>  => {
    try {
        const response = await AxiosInstanceBase.get("api/turno/all");
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener los turnos');
    }
}


export const createTurno = async (turno : TypeTurno):  Promise<TypeTurno>  => {
    try {
        const response = await AxiosInstanceBase.post("api/turno/nuevoTurno",turno);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al crear doctor');
    }
}