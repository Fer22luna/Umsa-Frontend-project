import { useState } from "react";




const  EspecialidadList = () => {
    const [pacientes, setPacientes] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    

  return (
    <>
    <h1>Especialidad</h1>
    </>
  );
}

export default EspecialidadList;