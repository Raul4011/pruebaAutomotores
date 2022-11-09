import React from 'react'
import Header from '../components/Header'
import { Form, Button } from 'react-bootstrap'
import "../Css/Formulario.css"

const Contacto = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Gracias Atenderemos tu Consulta a la Brevedad")
        e.target.reset()
    }

    return (
        <>
            <Header />
            <br />
            <br />
           
            <div class="row py-5 formulario">
                <div class="col-12 text-center formulario">
                    <h2>Formulario de contacto</h2>
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <label>Nombre y Apellido</label>
                            <Form.Control type="text" placeholder="" className='form1' required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder=""  className='form1' required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="tel" placeholder=""  className='form1' required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder=""  className='form1'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Provincia</Form.Label>
                            <Form.Control type="text" placeholder=""  className='form1'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Consulta</Form.Label>
                            <Form.Control as="textarea" rows={7}  className='form1' required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Hacer Consulta
                        </Button>
                    </Form>

                </div>
            </div>
        </>
    )
}

export default Contacto