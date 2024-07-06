import Table from '@mui/material/Table';
import TableBody from '@mui/material//TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  useEffect, useState } from 'react';
import { TypeTurno } from '../models/types/TypeTurno';
import { TurnoService } from '../Services/Turno.service';
import { Button } from '@mui/material';


const  TurnoList = () => {
    const [turnos, setTurnos] = useState<TypeTurno[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const traerTurnos = async () => {

        setLoading(true);
        try {
            const response = await TurnoService.getTurnos();
            console.log("response del fetch ", response)
            setTurnos(response); 
        } catch (err) {
            setError('Error al obtener los turnos');
        } finally {
            setLoading(false);
        }
    };
    
    
    useEffect(() => {   
        traerTurnos();
      }, []);

  return (
    <div style={{ width: '70%', margin: '40vh auto' }}>
       <div style={{textAlign: 'end', marginBottom: '20px',fontSize: '30px'}}>
          <Button href="./turnoForm" variant="contained">Nuevo Turno +</Button>
        </div>
      <h1 style={{textAlign: 'center', marginBottom: '20px',fontSize: '30px'}}>Lista de Turnos </h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fecha del Turno</TableCell>
            <TableCell align="left">Doctor asignado</TableCell>
            <TableCell align="left">Domicilio de la consulta</TableCell>
            <TableCell align="left">Obra social</TableCell>
            <TableCell align="left">Paciente</TableCell>
            <TableCell align="left">Estado turno</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {turnos.map((row) => (
            <TableRow
              key={row.doctor}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.doctor}
              </TableCell>
              <TableCell align="left">{row.fechaHoraTurno}</TableCell>
              <TableCell align="left">{row.domicilioConsulta}</TableCell>
              <TableCell align="left">{row.obraSocial}</TableCell>
              <TableCell align="left">{row.paciente}</TableCell>
              <TableCell align="left">{row.estadoTurno}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default TurnoList;