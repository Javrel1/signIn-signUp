import React from "react";
import style from './style.module.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

export function Forms(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    return(
        <div className={style.container}>
            <div className={style.forms}>
                <div className={style.form}>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required  style={{width: '420px', height: '45px', borderRadius: '20px', backgroundColor: '#edf5f3', marginTop: '20px'}} type="email" placeholder="Email"/>
                </div>
                <div className={style.form}>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} required   style={{width: '420px', height: '45px', borderRadius: '20px', backgroundColor: '#edf5f3', marginTop: '20px'}} type="password" placeholder="Password"/>
                </div>
            </div>
        </div>
    )
}