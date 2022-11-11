import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import "../Css/Admin.css"
import { IoCarSport } from "react-icons/io5";
import { FaPeopleCarry } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

const Admin = () => {


  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      
        <div className="container" >
        <h2 className='text-center'>Acciones de Administrador</h2>
        <br />
          <div className='row d-flex border Administrador'>
            
            <div className="col-4 text-center">
              <br />
              <br />
              <h3>Listar Vehiculos</h3>
              <br />
              <Link to="/admin/vehiculos">
                <button className='btn btn-success'>Vehiculos</button>
              </Link>
              <br />
              <IoCarSport className='icon1'/>
            </div>
            <div className="col-4 text-center">
              <br />
              <br />
              <h3>Listar Empleados</h3>
              <br />
              <Link to='/admin/empleados'>

                <button className='btn btn-primary'>Empleados</button>
              </Link>
              <br />
              <FaPeopleCarry className='icon1'/>
            </div>
            <div className="col-4 text-center">
              <br />
              <br />
              <h3>Listar Consultas</h3>
              <br />
              <Link to='/admin/consultas'>
                <button className='btn btn-warning'>Consultas</button>
              </Link>
              <br />
              <GiArchiveResearch className='icon1'/>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      

     

      <Footer />
    </>
  )
}

export default Admin