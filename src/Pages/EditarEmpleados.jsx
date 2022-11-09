import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

const EditarEmpleado = () => {
  let navigate = useNavigate()
  const BASE_URL = "http://localhost:8000/empleados/";
  let { id } = useParams();

  const [nomyape, setNomyApe] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cuil, setCuil] = useState(null);
  const [tel, setTel] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechNac, setFechaNac] = useState("");
  const [email, setEmail] = useState("");

  const getEmpleado = () => {
    axios.get(BASE_URL + id).then((resp) => {
      console.log(resp.data)
      setNomyApe(resp.data[0].nomyape)
      setDireccion(resp.data[0].direccion)
      setCuil(resp.data[0].cuil)
      setTel(resp.data[0].tel)
      setFechaIngreso(resp.data[0].fechaIngreso)
      setFechaNac(resp.data[0].fechaNac)
      setEmail(resp.data[0].email)
    });
  };

  const EditEmpleado = async() => {
    let editar = await axios.put(BASE_URL + id, {
      nomyape : nomyape,
      direccion: direccion,
      cuil : cuil,
      tel: tel,
      fechaIngreso: fechaIngreso,
      fechaNac: fechNac,
      email: email,
    });
    if (editar) {
      alert('se Editaron los valores correctamente')
      //axios.get()
      navigate('/admin/vehiculos')
    }
  };

  useEffect(() => {
    getEmpleado();
  }, []);

  return (
    <>
      <div className="text-center"> 
        <div className="">
          <Link to="/admin/empleados">
            <button className="btn btn-danger">X</button>
          </Link>
          <br />
          <h2>Valores a editar</h2>
          <hr />
          <br />
          <input
            type="text"
            value={nomyape}
            onChange={(e) => setNomyApe(e.target.value)}
          />
          <label htmlFor="">ingrese el nombre y apellido</label>
          <br />
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <label htmlFor="">ingrese la nueva Direccion</label>
          <br />
          <input
            type="text"
            value={cuil}
            onChange={(e) => setCuil(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo CUIL</label>
          <br />
          <input
            type="number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo Telefono</label>
          <br />
          <input
            type="text"
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
          />
          <label htmlFor="">ingrese la fecha de ingreso</label>
          <br />
          <input
            type="text"
            value={fechNac}
            onChange={(e) => setFechaNac(e.target.value)}
          />
          <label htmlFor="">ingrese la fecha de nacimiento</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">ingrese el nuevo email</label>
          <br />
          <br />
          <button className="btn btn-primary" onClick={EditEmpleado}>
            editar
          </button>
        </div>
      </div>
    </>
  );
};

export default EditarEmpleado;