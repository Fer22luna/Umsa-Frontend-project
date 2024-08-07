import { Navigate, Routes, Route } from "react-router-dom"
import Home from "../pages/home";
import PacienteList from "../pages/PacienteList";
import TurnoList from "../pages/TurnoList";
import TurnoForm from "../pages/TurnoForm";
import DoctoresList from "../pages/DoctorList";
import EspecialidadList from "../pages/especialidades";
import PacienteForm from "../pages/PacienteForm";

const Router = () => {


        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pacientes" element={<PacienteList />} />
                    <Route path="/pacienteform" element={<PacienteForm />} />
                    <Route path="/turnoform" element={<TurnoForm />} />
                    <Route path="/doctores" element={<DoctoresList />} />
                    <Route path="/turnos" element={<TurnoList />} />
                    <Route path="/especialidades" element={<EspecialidadList />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
              </>
        );
      }

export default Router