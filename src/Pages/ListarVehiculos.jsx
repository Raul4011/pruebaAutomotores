import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Header from "../components/Header";

const ListarVehiculos = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";

  const [autos, setAutos] = useState([]);

  const getAutos = () => {
    axios.get(BASE_URL).then((resp) => {
      console.log(resp);
      setAutos(resp.data);
    });
  };

  const eliminar = async (id) => {
    let eliminarAuto = prompt(
      "Estas seguro que quieres eliminar este vehiculo si/no"
    );
    if (eliminarAuto==='si' || eliminarAuto==='S'  || eliminarAuto==='SI'  || eliminarAuto==='s') {
      let eliminar = await axios.delete(BASE_URL + id);
      if (eliminar) {
        alert("Auto eliminado correctamente");
        axios.get(BASE_URL).then((resp) => {
          setAutos(resp.data);
        });
      }
    }else {
      return
    }
  };

  useEffect(() => {
    getAutos();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <br />
        <br />
        <div className="row">
          <div className="col-7">
            <h2>Listado de Vehiculos</h2>
          </div>
          <div className="col-3">
            <Link to="/admin/vehiculos/agregar">
              <button className="btn btn-primary">Agregar</button>
            </Link>
          </div>
          <div className="col-2">
            <Link to="/admin">
              <button className="btn btn-danger">X</button>
            </Link>
          </div>
        </div>
        <br />
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Año</th>
              <th scope="col">tipo</th>
              <th scope="col">Imagen</th>
              <th scope="col">PrecioCompra</th>
              <th scope="col">Patente</th>
              <th scope="col">Color</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {autos.map((item) => (
              <tr>
                <>
                  <th scope="row d-flex ">{item.id}</th>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.anio}</td>
                  <td>{item.tipo}</td>
                  <td>
                    <img src={item.imagen} alt="" width={200} />
                  </td>
                  <td>{item.precioCompra}</td>
                  <td>{item.patente}</td>
                  <td>{item.color}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar(item.id)}
                    >
                      <BiTrash />
                    </button>
                    <Link to={`/admin/vehiculos/editar/${item.id}`}>
                      <button className="btn btn-warning">
                        <BiPencil />
                      </button>
                    </Link>
                    <Link to={`/admin/vehiculos/ver/${item.id}`}>
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
  );
};
export default ListarVehiculos;
