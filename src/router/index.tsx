import { Navigate, Routes, Route } from "react-router-dom"
import Home from "../pages/home";
import PacienteList from "../pages/PacienteList";

const Router = () => {


        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/paciente" element={<PacienteList />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
              </>
        );
      }

export default Router