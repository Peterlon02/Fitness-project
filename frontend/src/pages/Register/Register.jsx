import React, { useState } from "react";
import {Button, Container, Form, } from 'react-bootstrap';
import styles from './Register.module.css';
import InputField from "../../components/InputField/InputField";
import axios from 'axios';


function Register(){

    const [formData, setFormData]=useState({
        name:'',
        surname:'',
        email:'',
        password:'',
        age:18
    })

    const handleChange=(e)=>{
        setFormData((prev)=>({
            ...prev,                       // copia tutto il vecchio formData
            [e.target.name]: e.target.value  // aggiorna solo il campo modificato
        }))
    }

    const handleSubmit=async(e)=>{

    }

    return (
        <Container fluid className={`${styles.containerMain }`}>
            <div  className={`${styles.containerForm}`}>
                <h1 className="text-center text-light">Registrazione</h1>
                <Form onSubmit={{handleSubmit}}>
                    <InputField
                        label="NOME"
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="COGNOME"
                        type='text'
                        name='surname'
                        value={formData.surname}
                        onChange={handleChange}
                    />
                    <InputField
                        label="email"
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputField
                        label="password"
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Form.Group>
                        <Form.Label>Età:<strong>{formData.age}</strong> anni</Form.Label>
                        <Form.Range 
                            min= '10'
                            max= '90'
                            name='age'
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit" className="w-100 mt-5">Registrazione</Button>
            </div>
        </Container>
    )
}

export default Register