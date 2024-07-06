import React, {useEffect, useState} from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { TPaciente } from "../models/types/TPaciente";
import ModalNotificacion from "../Components/ModalNotificacion/ModalNotificacion";
import { PacienteService } from "../Services/Paciente.service";
import { TypeTurno } from "../models/types/TypeTurno";
import { TurnoService } from "../Services/Turno.service";
import { DoctorService } from "../Services/Doctor.service";
import { TDoctor } from "../models/types/TDoctor";
 
const TurnoForm = () => {
    const [turno, setTurno] = useState<TypeTurno | null>(null)
    const [fechaHoraTurno, setFechaHoraTurno] = useState("")
    const [domicilioConsulta, setDomicilioConsulta] = useState("")
    const [estadoTurno, setEstadoTurno] = useState(true)
    const [paciente, setPaciente] = useState<TPaciente | null |undefined >(null)
    const [allPacientes, setAllPacientes] = useState<TPaciente[]>([])
    const [obraSocial, setObraSocial] = useState("")
    const [doctor, setDoctor] = useState<TDoctor | null | undefined >(null);
    const [allDoctors, setAllDoctors] = useState<TDoctor[]>([])
    const [responseError, setResponseError] = useState(false)  
    // const [modalOpen, setModalOpen] = useState(false);

    // const handleModalClose = () => {
    //     setModalOpen(false);
    // }

    const saveTurno = (turno: TypeTurno) => { 
        TurnoService.createTurno(turno).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Error al crear Turno');
            })}

    const doctorList = () => {
        DoctorService.getDoctores().then((response) => {
            console.log(response)
            setAllDoctors(response);
        })
    }
    const pacienteList = () => {
        PacienteService.getPacientes().then((response) => {
            console.log(response)
            setAllPacientes(response);
        })
    }

    const findPacienteByName = (name: string) => {
        return allPacientes.find((paciente) => paciente.nombre === name);
    }

    const findDoctorByLastname = (lastname : string) => {
        return allDoctors.find((doctor) => doctor.apellido === lastname);
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()  // evite que se mande y se resetee el formulario
        setResponseError(false);
        setEstadoTurno(true);

        const newTurno: TypeTurno = {
            fechaHoraTurno,
            domicilioConsulta,
            estadoTurno,
            obraSocial,
            paciente: paciente?.id, 
            doctor: doctor?.id,
        };
        setTurno(newTurno);
        //setModalOpen(true);
        saveTurno(newTurno);
        console.log(newTurno);
    }


    useEffect(() => {
        doctorList();
        pacienteList();
    }, [])
    

    return ( 
        <>
         <div style={{ width: '50%', margin: '20vh auto' }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 style={{textAlign: 'center', marginBottom: '22px',fontSize: '40px'}}>Insertar nuevo turno </h1>
                <TextField 
                    label="Horario"
                    onChange={e => setFechaHoraTurno(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="Date"
                    sx={{mb: 3}}
                    size="medium"
                    fullWidth
                    value={fechaHoraTurno}
                    error={responseError}
                 />
                 <TextField 
                    label="Lugar de consulta"
                    onChange={e => setDomicilioConsulta(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={domicilioConsulta}
                    error={responseError}
                    size="medium"
                    fullWidth
                    sx={{mb: 3}}
                 />
                <Autocomplete
                    inputValue={paciente?.nombre}
                    onInputChange={(event, newInputValue) => {
                    setPaciente(findPacienteByName(newInputValue))
                    }}
                    disablePortal
                   
                    options={allPacientes}
                    getOptionLabel={(option) => `${option.nombre}  ${option.apellido}`}
                    fullWidth
                    sx={{mb: 3}}
                    renderInput={(params) => <TextField {...params} label="Pacientes disponibles" />}
                 />

                <Autocomplete
                    inputValue={doctor?.apellido}
                    onInputChange={(event, newInputValue) => {
                    setDoctor(findDoctorByLastname(newInputValue))
                    }}
                    disablePortal
                   
                    options={allDoctors}
                    getOptionLabel={(option) => `${option.nombre}  ${option.apellido}`}
                    fullWidth
                    sx={{mb: 3}}
                    renderInput={(params) => <TextField {...params} label="Doctores disponibles" />}
                 />

                <TextField 
                    label="obra social"
                    onChange={e => setObraSocial(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={obraSocial}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <div style={{textAlign: 'center'}}>
                 <Button variant="outlined" color="secondary" type="submit">Insert Patient</Button>
                 </div>
            
                 {/* <ModalNotificacion open={modalOpen} handleClose={handleModalClose} paciente={paciente} /> */}
                 {/* {turno && (
                <ModalNotificacion open={modalOpen} handleClose={handleModalClose} paciente={paciente} />
            )} */}

        </form>
        </div>
        </>
     );
}
 
export default TurnoForm;