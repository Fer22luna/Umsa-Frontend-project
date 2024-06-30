import { Navigate, Routes, Route } from "react-router-dom"
import Home from "../pages/home";
import PacienteList from "../pages/PacienteList";
import TurnoList from "../pages/TurnoList";
import DoctoresList from "../pages/DoctorList";
import EspecialidadList from "../pages/especialidades";

const Router = () => {


        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pacientes" element={<PacienteList />} />
                    <Route path="/doctores" element={<DoctoresList />} />
                    <Route path="/turnos" element={<TurnoList />} />
                    <Route path="/especialidades" element={<EspecialidadList />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
              </>
        );
      }

export default Router