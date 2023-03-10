import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function PostUser() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const postData = () => {
        axios.post(`http://localhost:3001/Usuario`, {
            nome,
            sobrenome,
            email,
            telefone,
            data,
            hora
        })
    }
    return (
        <div className="crud">
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setNome(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome' onChange={(e) => setSobrenome(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Telefone</label>
                    <input placeholder='Telefone' onChange={(e) => setTelefone(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Data de Agendamento</label>
                    <input placeholder='Data de Agendamento' onChange={(e) => setData(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Horário de Agendamento</label>
                    <input placeholder='Horário de Agendamento' onChange={(e) => setHora(e.target.value)} />
                </Form.Field>
                <div className="Buttons">
                    <Button onClick={postData} type='submit'>Agendar</Button>
                    <Link to="/Consulta">
                        <Button type='submit'>Consultar</Button>
                    </Link>
                </div>
            </Form>
        </div>
    );
}