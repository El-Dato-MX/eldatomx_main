import { Route, Routes } from "react-router-dom";
import DatoRoutes from "../eldato/routes/DatoRoutes";

const AppRouter = () => {
  return (
    <Routes>

        {/* ElDatoApp */}
        <Route path='/*' element={ <DatoRoutes/> } />


    </Routes>
  )
}

export default AppRouter