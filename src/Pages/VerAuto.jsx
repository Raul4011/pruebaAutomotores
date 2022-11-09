import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Button } from "react-bootstrap";

const VerAuto = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const { id } = useParams();

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [precioCompra, setPrecioCompra] = useState("");
  const [patente, setPatente] = useState("");

  const getCar = () => {
    axios.get(BASE_URL + id).then((resp) => {
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo);
      setAnio(resp.data[0].anio);
      setTipo(resp.data[0].tipo);
      setImagen(resp.data[0].imagen);
      setPrecioCompra(resp.data[0].precioCompra);
      setPatente(resp.data[0].patente);
    });
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <>
      <div className="div1">
        <Header />
        <br />
        <br />
        
        <Card style={{ width: "40rem" }} className="m-auto">
          <Link to={"/admin/vehiculos"}>
            <Button variant="danger">X</Button>
          </Link>
          <Card.Img variant="top" src={imagen} />
          <Card.Body className="text-center">
            <Card.Title>
              {marca} {modelo}
            </Card.Title>
            <Card.Text>Año: {anio}</Card.Text>
            <Card.Text>Tipo: {tipo}</Card.Text>
            <Card.Text>Precio: {precioCompra}</Card.Text>
            <Card.Text>Patente: {patente}</Card.Text>
          </Card.Body>
          <Link to='/admin/vehiculos'>
            <Button className="btn btn-success">Volver</Button>
          </Link>
        </Card>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default VerAuto;
