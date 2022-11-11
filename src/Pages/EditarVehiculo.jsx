import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../Css/EditVehiculo.css'

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

  const EditVehiculo = async () => {
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

  const scroll =() => {
    window.scrollTo({ top: 0, left: 0, behavior: undefined });
  }

  useEffect(() => {
    scroll();
    getVehicule();
  }, []);

  return (
    <>
      <Header />
      
    
      <div className="text-center div1">
      <br />
      <br />
      <br />
        <div className="editVehiculo">
          <div className="row mt-5">
            <div className="col-6">
              <h2 className="text-danger">Valores a editar</h2>
            
            </div>
            <div className="col-6">
              <Link to="/admin/vehiculos">
                <button className="btn btn-danger">Regresar</button>
              </Link>
            </div>
          </div>

          <br />

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
            <button className="btn btn-block btn-primary" onClick={EditVehiculo}>
              editar
            </button>
            <br />
          </form>

        </div>
        <br />

      </div>
      <br />
      <Footer />
    </>
  );
};

export default EditarVehiculo;
