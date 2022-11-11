import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


const IngresoEmpleado = () => {

  const [nomyape,setNomyApe] = useState('')
  const [dir,setDir] = useState('')
  const [loc,setLoc] = useState('')
  const [prov,setProv] = useState('')
  const [cuil,setCuil] = useState('')
  const [tel,setTel] = useState('')
  const [fechaIngreso,setFechaIngreso] = useState('')
  const [fechaNac,setFechaNac] = useState('')
  const [email,setEmail] = useState('')

  const createEmployee = () =>{
    
  }

  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <h3>Ingrese un nuevo vehiculo</h3>
      <br />
      <form onSubmit={createEmployee}>
        <input
          type="text"
          placeholder="ingresa nombre y apellido"
          onChange={(e) => setNomyApe(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese la Direccion"
          onChange={(e) => setDir(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese la Localidad"
          onChange={(e) => setLoc(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingrese la Provincia"
          onChange={(e) => setProv(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="ingrese el CUIL"
          onChange={(e) => setCuil(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="ingresa la Fecha de Ingreso"
          onChange={(e) => setFechaIngreso(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="ingresa la Fecha de Nacimiento"
          onClick={(e) => setFechaNac(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="ingrese el Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">agregar</button>
      </form>
      <br />
      <br />
      
    </div>
  )
}

export default IngresoEmpleado