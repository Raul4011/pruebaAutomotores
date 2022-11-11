import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./Pages/Admin";
import Contacto from "./Pages/Contacto";
import Edit from "./Pages/Edit";
import EditarEmpleado from "./Pages/EditarEmpleados";
import EditarVehiculo from "./Pages/EditarVehiculo";
import FormaPago from "./Pages/FormaPago";
import Home from "./Pages/Home";
import IngresoAuto from "./Pages/IngresoAuto";
import IngresoEmpleado from "./Pages/IngresoEmpleado";
import ListarEmpleados from "./Pages/ListarEmpleados";
import ListarVehiculos from "./Pages/ListarVehiculos";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Vehiculos from "./Pages/Vehiculos";
import VerAuto from "./Pages/VerAuto";
import VerEmpleado from "./Pages/VerEmpleado";
import View from "./Pages/View";

function App() {
  const [user,setUser] = useState(null)

  const traerUser = (usuario) => {
    console.log(usuario);
    setUser(usuario)
  }
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login traerUser={traerUser}/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/vehiculos" element={<Vehiculos/>}/>
        <Route path="/vehiculos/:id" element={<View />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/formas-de-pago" element={<FormaPago />}/>
        <Route element={<PrivateRoute user={user}/>}>
          <Route path="/editar/:id" element={<Edit/>}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/vehiculos" element={<ListarVehiculos/>}/>
          <Route path="/admin/vehiculos/editar/:id" element={<EditarVehiculo/>}/>
          <Route path="/admin/vehiculos/agregar" element={<IngresoAuto />}/>
          <Route path="/admin/vehiculos/ver/:id" element={<VerAuto/>}/>
          <Route path="/admin/empleados" element={<ListarEmpleados/>}/>
          <Route path="/admin/empleados/agregar" element={<IngresoEmpleado/>}/>
          <Route path="/admin/empleados/editar/:id" element={<EditarEmpleado/>}/>
          <Route path="/admin/empleados/ver/:id" element={<VerEmpleado />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
