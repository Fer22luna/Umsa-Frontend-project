import React, {useState} from "react";
import { TextField, FormControl, Button, Dialog } from "@mui/material";
import { TPaciente } from "../models/types/TPaciente";
import ModalNotificacion from "../Components/ModalNotificacion/ModalNotificacion";
import { PacienteService } from "../Services/Paciente.service";
 
const PacienteForm = () => {
    const [paciente, setPaciente] = useState<TPaciente | null>(null)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [celular, setCelular] = useState("")
    const [obraSocial, setObraSocial] = useState("")
    const [cuit, setCuit] = useState("")
    const [responseError, setResponseError] = useState(false)  
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    }
 
    const savePaciente = (paciente: TPaciente) => { async () => {
        try {
            const response = await PacienteService.createPaciente(paciente);
            console.log(response)
        } catch (error) {
            console.error(error);
            throw new Error('Error al crear paciente');
        }
    }}

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResponseError(false);
        if (nombre == '') {
            setResponseError(true)
        }
        if (cuit == '') {
            setResponseError(true)
        }
        const newPaciente: TPaciente = {
            nombre,
            apellido,
            dni,
            domicilio,
            fechaNacimiento,
            celular,
            obraSocial,
            cuit,
        };
        setPaciente(newPaciente);
        setModalOpen(true);
        savePaciente(newPaciente);
        
    }



     
    return ( 
        <>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Insertar nuevo paciente </h2>
                <TextField 
                    label="nombre"
                    onChange={e => setNombre(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    size="medium"
                    value={nombre}
                    error={responseError}
                 />
                 <TextField 
                    label="apellido"
                    onChange={e => setApellido(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={apellido}
                    error={responseError}
                    size="medium"
                    sx={{mb: 3}}
                 />
                   <TextField 
                    label="dni"
                    onChange={e => setDni(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={dni}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                   <TextField 
                    label="fecha de nacimiento"
                    onChange={e => setFechaNacimiento(e.target.value)}
                    required    
                    color="secondary"
                    type="Date"
                    value={fechaNacimiento}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
                 />

                    <TextField 
                    label="Domicilio"
                    onChange={e => setDomicilio(e.target.value)}
                    required    
                    color="secondary"
                    type="text"
                    value={domicilio}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
                 /> 
                <TextField 
                    label="celular"
                    onChange={e => setCelular(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={celular}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
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
                <TextField 
                    label="cuit"
                    onChange={e => setCuit(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={cuit}
                    error={responseError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Insert Patient</Button>
            
                 {/* <ModalNotificacion open={modalOpen} handleClose={handleModalClose} paciente={paciente} /> */}
                 {paciente && (
                <ModalNotificacion open={modalOpen} handleClose={handleModalClose} paciente={paciente} />
            )}

        </form>
        </>
     );
}
 
export default PacienteForm;