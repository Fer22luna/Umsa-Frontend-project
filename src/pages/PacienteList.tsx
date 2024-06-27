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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const  PacienteList = () => {
    const [pacientes, setPacientes] = useState<TPaciente[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const traerPacientes = useCallback(async () => {

        setLoading(true);
        try {
            const response = await PacienteService.getPacientes();
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
            <TableCell align="right">apellido</TableCell>
            <TableCell align="right">dni</TableCell>
            <TableCell align="right">Domicilio</TableCell>
            <TableCell align="right">Fecha Nacimiento</TableCell>
            <TableCell align="right">celular</TableCell>
            <TableCell align="right">Obra social</TableCell>
            <TableCell align="right">Cuit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PacienteList;