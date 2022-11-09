import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IngresoAuto = () => {
  let navigate = useNavigate();
  const BASE_URL = "http://localhost:8000/vehiculos/";

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState('');
  const [patente, setPatente] = useState("");
  const [color, setColor] = useState("");
  const [listado,setListado] = useState([])

  const getAutos = () =>{
    axios.get(BASE_URL).then(resp=>{
      setListado(resp.data)
    })
  }

  const createAuto = (e) => {
    e.preventDefault();
    let nuevoAuto = axios
      .post(BASE_URL, {
        marca: marca,
        modelo: modelo,
        anio: anio,
        tipo: tipo,
        imagen: imagen,
        precioCompra: precioCompra,
        patente: patente,
        color: color,
      })
      .then((resp) => {
        setListado([...listado,resp.data])
      })
      //.error((err) => console.log(err));

    if (nuevoAuto) {
      alert("guardado correctamente");
      getAutos()
      navigate("/admin/vehiculos");
    }
  };

  useEffect(()=>{
    getAutos()
  },[])


  return (
    <div className="text-center">
      <br />
      <br />
      <h3>Ingrese un nuevo vehiculo</h3>
      <br />
      <form onSubmit={createAuto}>
        <input
          type="text"
          placeholder="ingresa la marca"
          onChange={(e) => setMarca(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese el modelo"
          onChange={(e) => setModelo(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="ingrese el año"
          onChange={(e) => setAnio(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese el tipo"
          onChange={(e) => setTipo(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="sube tu imagen"
          onClick={(e) => setImagen(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese el precio"
          onChange={(e) => setPrecioCompra(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese la patente"
          onChange={(e) => setPatente(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese el color"
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">agregar</button>
      </form>
      <br />
      <br />
      <h3>
        {marca}---{modelo}---{anio}---{tipo}
      </h3>
      <img src={imagen} alt="" />
      <h2>Precio: {precioCompra}</h2>
    </div>
  );
};

export default IngresoAuto;
