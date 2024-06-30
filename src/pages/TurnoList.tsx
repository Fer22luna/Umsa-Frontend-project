import { useState } from "react";


const  TurnoList = () => {
    const [pacientes, setPacientes] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    

  return (
    <>
    <h1>Turno</h1>
    </>
  );

}
export default TurnoList;