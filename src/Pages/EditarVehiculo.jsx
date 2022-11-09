import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

const EditarVehiculo = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  let { id } = useParams();
  let navigate = useNavigate()

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [patente, setPatente] = useState("");

  const getVehicule = () => {
    axios.get(BASE_URL + id).then((resp) => {
      console.log(resp.data);
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo)
      setAnio(resp.data[0].anio)
      setTipo(resp.data[0].tipo)
      setImagen(resp.data[0].imagen)
      setPrecioCompra(resp.data[0].precioCompra)
      setPatente(resp.data[0].patente)
    });
  };

  const EditVehiculo = async() => {
    let editar = await axios.put(BASE_URL + id, {
      marca: marca,
      modelo: modelo,
      anio: anio,
      tipo: tipo,
      imagen: imagen,
      precioCompra: precioCompra,
      patente: patente,
    });
    if (editar) {
      alert('se Editaron los valores correctamente')
      //axios.get()
      navigate('/admin/vehiculos')
    }
  };

  useEffect(() => {
    getVehicule();
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="">
          <Link to="/admin/vehiculos">
            <button className="btn btn-danger">X</button>
          </Link>
          <br />
          <h2>Valores a editar</h2>
          <hr />
          <br />
          <form >
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
          <label htmlFor="">ingrese la nueva marca</label>
          <br />
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo modelo</label>
          <br />
          <input
            type="number"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo año</label>
          <br />
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo Tipo</label>
          <br />
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <label htmlFor="">ingrese la nueva Imagen</label>
          <br />
          <input
            type="text"
            value={precioCompra}
            onChange={(e) => setPrecioCompra(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo Precio</label>
          <br />
          <input
            type="text"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
          />
          <label htmlFor="">ingrese la nueva Patente</label>
          <br />
          <br />
          <button className="btn btn-primary" onClick={EditVehiculo}>
            editar
          </button>
          </form>
          
        </div>
        <br />
        <h3>{marca}</h3>
        <br />
        <h1>jelouuuuuu</h1>
      </div>
    </>
  );
};

export default EditarVehiculo;
