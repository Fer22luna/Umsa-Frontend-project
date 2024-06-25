import { Navigate, Routes, Route } from "react-router-dom"
import Home from "../pages/home";

const Router = () => {


        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} /> 
                </Routes>
              </>
        );
      }

export default Router