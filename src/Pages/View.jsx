import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import "./View.css";
import Footer from "../components/Footer";

const View = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const { id } = useParams();

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState(null);
  const [tipo, setTipo] = useState("");
  const [imagen, setImagen] = useState("");
  const [color,setColor] = useState('')

  const getCar = () => {
    axios.get(BASE_URL + id).then((resp) => {
      setMarca(resp.data[0].marca);
      setModelo(resp.data[0].modelo);
      setAnio(resp.data[0].anio);
      setTipo(resp.data[0].tipo);
      setImagen(resp.data[0].imagen);
      setColor(resp.data[0].color)
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
        <br />
        <br />
        <Card style={{ width: "40rem" }} className="m-auto">
          <Link to={"/vehiculos"}>
            <Button variant="danger">X</Button>
          </Link>
          <Card.Img variant="top" src={imagen} />
          <Card.Body className="text-center">
            <Card.Title>
              {marca} {modelo}
            </Card.Title>
            <Card.Text><span className="font-weight-bold">Año : </span>{anio}</Card.Text>
            <Card.Text><span className="font-weight-bold">Tipo : </span>{tipo}</Card.Text>
            <Card.Text><span className="font-weight-bold">Color : </span>{color}</Card.Text>
          </Card.Body>
          <Button className="btn btn-success">
           <a href="https://api.whatsapp.com/send/?phone=543815260220&text=Hola+%2AAutomotores%20Tucuman%2A+...&type=phone_number&app_absent=0" className="text-white"
           target="_blank" rel="noreferrer">
            Chatear con un Asesor
           </a>
            
          </Button>
        </Card>
        <br />
        <br />
        
      </div>
      <Footer />
    </>
  );
};

export default View;
