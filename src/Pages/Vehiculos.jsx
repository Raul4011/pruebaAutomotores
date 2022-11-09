import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card,Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const Vehiculos = () => {
  const BASE_URL = "http://localhost:8000/vehiculos/";
  const [autos, setAutos] = useState([]);

  const getAutos = () => {
    axios.get(BASE_URL).then((resp) => {
      setAutos(resp.data)
      //console.log(resp.data);
    });
  };

  useEffect(() => {
    getAutos();
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <h3 className="text-center">Nuestros Autos</h3>
      <br />
      <div className="row">
        {autos.map((auto) => (
          <>
            <div className="col-6 text-center">
              <Card style={{ width: "40rem" }} >
                <Card.Img variant="top" src={auto.imagen} />
                <Card.Body>
                  <Card.Title>{auto.marca} {auto.modelo}</Card.Title>
                  <Card.Text>
                    Año: {auto.anio} 
                  </Card.Text>
                  <Card.Text>
                    Tipo: {auto.tipo} 
                  </Card.Text>
                  <Link to={`/vehiculos/${auto.id}`}>
                    <Button variant="success">Lo Quiero</Button>
                  </Link>
                </Card.Body>
              </Card>
              <br /><br />
            </div>
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Vehiculos;
