import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";

const ListarEmpleados = () => {

    const BASE_URL = "http://localhost:8000/empleados/";

    const [empleados,setEmpleados] = useState([])

    const getEmpleados = () =>{
        axios.get(BASE_URL).then(resp=>{
            setEmpleados(resp.data)
        })
    }

    const borrarEmpleado = () =>{
      axios.delete()
    }


    useEffect(()=>{
        getEmpleados()
    },[])

  return (
    <>
    <div className="container">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <h2>Listado de Empleados</h2>
        <br />
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre y Apellido</th>
              <th scope="col">Direccion</th>
              <th scope="col">Cuil</th>
              <th scope="col">Telefono</th>
              <th scope="col">Fecha Ingreso</th>
              <th scope="col">Fecha Nac</th>
              <th scope="col">E-mail</th>
              <th scope="col">Acciones</th>
             
            </tr>
          </thead>
          <tbody>
            
            {empleados.map((item) => (
              <tr>
                <>
                  <th scope="row d-flex ">{item.id}</th>
                  <td>{item.nomyape}</td>
                  <td>{item.direccion}</td>
                  <td>{item.cuil}</td>
                  <td>{item.tel}</td>
                  <td>{item.fechaIngreso}</td>
                  <td>{item.fechaNac}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => borrarEmpleado(item.id)}
                    >
                      <BiTrash />
                    </button>
                    <Link to={`/admin/empleados/editar/${item.id}`}>
                      <button className="btn btn-warning">
                        <BiPencil />
                      </button>
                    </Link>
                    <Link to={`/ver/${item.id}`}>
                      <button className="btn btn-success">
                        <FaEye />
                      </button>
                    </Link>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListarEmpleados