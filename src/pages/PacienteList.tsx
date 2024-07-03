import Table from '@mui/material/Table';
import TableBody from '@mui/material//TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCallback, useEffect, useState } from 'react';
import { TPaciente } from '../models/types/TPaciente';
import { PacienteService } from '../Services/Paciente.service';


const  PacienteList = () => {
    const [pacientes, setPacientes] = useState<TPaciente[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const traerPacientes = useCallback(async () => {

        setLoading(true);
        try {
            const response = await PacienteService.getPacientes();
            console.log("response del fetch ", response)
            setPacientes(response); // Almacena los datos en el estado
        } catch (err) {
            setError('Error al obtener los pacientes');
        } finally {
            setLoading(false);
        }
    },[]);
    
    
    useEffect(() => {   
        traerPacientes();
      }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>nombre</TableCell>
            <TableCell align="left">apellido</TableCell>
            <TableCell align="left">dni</TableCell>
            <TableCell align="left">Domicilio</TableCell>
            <TableCell align="left">Fecha Nacimiento</TableCell>
            <TableCell align="left">celular</TableCell>
            <TableCell align="left">Obra social</TableCell>
            <TableCell align="left">Cuit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientes.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="left">{row.apellido}</TableCell>
              <TableCell align="left">{row.dni}</TableCell>
              <TableCell align="left">{row.domicilio}</TableCell>
              <TableCell align="left">{row.fechaNacimiento}</TableCell>
              <TableCell align="left">{row.celular}</TableCell>
              <TableCell align="left">{row.obraSocial}</TableCell>
              <TableCell align="left">{row.cuit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PacienteList;