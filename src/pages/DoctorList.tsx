import { useCallback, useEffect, useState } from "react";
import { TDoctor } from "../models/types/TDoctor";
import { DoctorService } from "../Services/Doctor.service";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



const  DoctorList = () => {
  const [doctores, setDoctores] = useState<TDoctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const traerDoctores = useCallback(async () => {

      setLoading(true);
      try {
          const response = await DoctorService.getDoctores();
          console.log("response del fetch ", response)
          setDoctores(response);
      } catch (err) {
          setError('Error al obtener los pacientes');
      } finally {
          setLoading(false);
      }
  },[]);
  
  
  useEffect(() => {   
      traerDoctores();
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
          <TableCell align="left">Cuit</TableCell>
          <TableCell align="left">Especialidad</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {doctores.map((row) => (
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
            <TableCell align="left">{row.cuit}</TableCell>
            <TableCell align="left">{row.especialidad}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default DoctorList;