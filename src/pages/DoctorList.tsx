import { useState } from "react";
import { TDoctor } from "../models/types/TDoctor";




const  DoctoresList = () => {
    const [pacientes, setPacientes] = useState<TDoctor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    

  return (
    <>
    <h1>Doctores</h1>
    </>
  );
}

export default DoctoresList;