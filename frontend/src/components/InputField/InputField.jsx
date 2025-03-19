import React from "react";
import { Form } from "react-bootstrap";
import './InputField.module.css'

function InputField({type, name, value, onChange, label}){
    return(
        <Form.Group className='mb-3'>
            <Form.Label >{label}</Form.Label>
                <Form.Control
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    required
            />
       </Form.Group>
    )
}

export default InputField