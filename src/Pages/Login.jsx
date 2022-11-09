import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = ({ traerUser }) => {
  const navigate = useNavigate()

  const BASE_URL2 = "http://localhost:8000/usuarios/";

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  
  const Submit = (e) => {
    e.preventDefault()
    /*
    const Admin = users.filter(elem => elem.usuario===user & user==='Admin' & elem.contraseña=== pass & pass==='admin123')
    console.log(Admin[0].contraseña);
    
    if (Admin[0].usuario === 'Admin' & Admin[0].contraseña === 'admin123') {
      alert('Bienvenido BOSS JEFE ANIMAL')
      navigate('/admin') 
      //aqui iria el estado a true para mostrar el crud en vehiculos y usuarios
      // y deberia salir a la pag home
    }else {
      alert('usuario o contraseña incorrectas intente nuevamente')
    }*/
    /*
    const NormalUser = users.find(elem => elem.usuario !== user & elem.contraseña !== pass) 
    console.log(NormalUser)
    */
    /*
    const busqueda = users.find(elem => elem.usuario === user & elem.contraseña === pass)
    if (busqueda) {
      alert('logueado correctamente BIENVENIDO/A');
      // despues salir a la pag home
      
    }else {
      alert('usuario o contraseña incorrectas intente nuevamente')
      //limpiar inputs y volver a preguntar
    }*/
   
    if (user === 'Admin' & pass === 'admin123') {
      alert('logueado correctamente')
        navigate('/admin')
        e.target.reset()
    }else {
      alert('usuario o contraseña incorrectos intente nuevamente')
        e.target.reset()
    }
    /*
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      console.log(element.usuario);
      console.log(element.contraseña)
      
      if (element.usuario === user & element.contraseña === pass) {
        alert('logueado correctamente')
        navigate('/admin')
        e.target.reset()
        
      }else {
        alert('usuario o contraseña incorrectos intente nuevamente')
        e.target.reset()
        
      }
    }
    */
    
    //console.log(users);
    

    /*else else if (element.usuario === user && element.contraseña === pass && user === 'Admin' && pass === 'admin123') {
        alert('Bienvenido Jefe Boss')
        navigate('/admin')
        break
      } */
    

    traerUser(user)
    e.target.reset()
  };

  const getLogin = () => {
    axios.get(BASE_URL2).then((resp) => {
      setUsers(resp.data)
      //console.log(resp.data)
    });
    //console.log(users);
  };

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <>
      <div className="container">

        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="border text-center">
          <Link to={"/"}>
            <button className="btn btn-danger">X</button>
          </Link>
          <h2 className="text-danger">Login</h2>
          <br />
          <form action="" onSubmit={Submit}>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              required
              onChange={(e) => setUser(e.target.value)}
            />
            <br /><br />
            <input
              type="password"
              placeholder="ingresa tu contraseña"
              required
              onChange={(e) => setPass(e.target.value)}
            />
            <br />
            <Link to="/register">
              <p>no estas registrado?</p>
            </Link>
            <button type="submit">Login</button>
          </form>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Login;
