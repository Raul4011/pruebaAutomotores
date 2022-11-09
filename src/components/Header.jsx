import React from 'react'
import {Navbar,Container,Nav,} from "react-bootstrap";
import "../Css/Header.css"



const Header = () => {
  //<img src="https://www.planx5.com/web/sites/all/themes/alfa202001/img/comun/logo-planx5-1.png" alt="" height={50}/>
  return (
    <>
    
    <Navbar bg="primary" variant="dark" fixed="top" className='Logo'>
        <Container>
          <Navbar.Brand href="/" >
            PlanX5
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="/vehiculos">Vehiculos</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/contacto">Contactanos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header