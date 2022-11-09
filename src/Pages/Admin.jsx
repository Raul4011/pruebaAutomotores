import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Admin = () => {
  

  return (
    <>
    <div className="container">

      <Header />
      <br />
      <br />
      
      <div className='row d-flex border'width={200}>
        <div className="col-4 text-center">
          <h3>Listar Vehiculos</h3>
          <Link to="/admin/vehiculos">
            <button className='btn btn-success'>Vehiculos</button>
          </Link>
        </div>
        <div className="col-4 text-center">
          <h3>Listar Empleados</h3>
          <Link to='/admin/empleados'>
          
             <button className='btn btn-primary'>Empleados</button>
          </Link>
        </div>
        <div className="col-4 text-center">
          <h3>Listar Consultas</h3>
          <Link to='/admin/consultas'>
             <button className='btn btn-warning'>Consultas</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
    </>
  )
}

export default Admin