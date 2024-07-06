import { useState } from "react"
import { TDoctor } from "../models/types/TDoctor"
import { DoctorService } from "../Services/Doctor.service"
import { Button, TextField } from "@mui/material"
import ModalNotificacion from "../Components/ModalNotificacion/ModalNotificacion"

const DoctorForm = () => {
    const [doctor, setDoctor] = useState<TDoctor | null>(null)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [celular, setCelular] = useState("")
    const [cuit, setCuit] = useState("")
    const[especialidad, setEspecialidad] = useState("")
    const [responseError, setResponseError] = useState(false)  
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false);
    }
 
    const saveDoctor = (doctor: TDoctor) => { 
        DoctorService.createDoctor(doctor).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Error al crear doctor');
            })}

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault() 
        setResponseError(false);
        if (nombre == '') {
            setResponseError(true)
        }
        if (cuit == '') {
            setResponseError(true)
        }
        const newDoctor: TDoctor = {
            nombre,
            apellido,
            dni,
            domicilio,
            fechaNacimiento,
            celular,
            cuit,
            especialidad,
            obraSocial: ""
        };
        setDoctor(newDoctor);
        setModalOpen(false);
        saveDoctor(newDoctor);

        
    }

    return ( 
        <>
         <div style={{ width: '50%', margin: '20vh auto' }}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h1 style={{textAlign: 'center', marginBottom: '22px',fontSize: '40px'}}>Insertar nuevo paciente </h1>
                <TextField 
                    label="nombre"
                    onChange={e => setNombre(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    size="medium"
                    fullWidth
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
                    fullWidth
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
                    label="Especialidad"
                    onChange={e => setEspecialidad(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={especialidad}
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
                 <div style={{textAlign: 'center'}}>
                 <Button variant="outlined" color="secondary" type="submit">Insert Doctor</Button>
                 </div>
                 {}

        </form>
        </div>
        </>
     );
}
export default DoctorForm;