import { Route, Routes } from "react-router-dom"
import DatoPage from "../pages/DatoPage"


const DatoRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<DatoPage />} />
    </Routes>
  )
}

export default DatoRoutes