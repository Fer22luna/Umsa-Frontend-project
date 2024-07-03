import { Preview } from "@mui/icons-material"
import { Box, Button, Dialog, Modal, Typography } from "@mui/material"
import { useState } from "react"
import { TPaciente } from "../../models/types/TPaciente"

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  paciente: any; // Puedes ajustar el tipo según tus necesidades
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalNotificacion: React.FC<BasicModalProps>  = ({ open, handleClose, paciente }) => {

return(
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Detalles del Paciente
    </Typography>
    {paciente && (
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p><strong>Nombre:</strong> {paciente.nombre}</p>
        <p><strong>Apellido:</strong> {paciente.apellido}</p>
        <p><strong>DNI:</strong> {paciente.dni}</p>
        <p><strong>Domicilio:</strong> {paciente.domicilio}</p>
        <p><strong>Fecha de Nacimiento:</strong> {paciente.fechaNacimiento}</p>
        <p><strong>Celular:</strong> {paciente.celular}</p>
        <p><strong>Obra Social:</strong> {paciente.obraSocial}</p>
        <p><strong>CUIT:</strong> {paciente.cuit}</p>
      </Typography>
    )}
    <Button onClick={handleClose}>Close</Button>
  </Box>
</Modal>
);
}

export default ModalNotificacion;