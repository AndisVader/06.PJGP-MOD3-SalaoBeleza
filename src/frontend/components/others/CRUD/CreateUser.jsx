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

    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        data: "",
        hora: ""
    })

    const [emptyValue, SetEmptyValue] = useState(false)

    const handleChange = (e) => {
        let newProp = form;
        newProp[e.target.name] = e.targe.value;
        setForm({ ...newProp })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let emptyValues = Object.values(form).some(obj => obj == "")
        SetEmptyValue(emptyValues)
    }


    return (
        <div className="crud">
            <Form className="create-form" onSubmit={(e) => { handleSubmit(e) }}>
                <h1>Faça seu Agendamento</h1>
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' name='nome' onChange={(e) => setNome(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["nome"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome' name='sobrenome' onChange={(e) => setSobrenome(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["sobrenome"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='E-mail' name='email' onChange={(e) => setEmail(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["email"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
                </Form.Field>
                <Form.Field>
                    <label>Telefone</label>
                    <input placeholder='Telefone' name='telefone' onChange={(e) => setTelefone(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["telefone"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
                </Form.Field>
                <Form.Field>
                    <label>Data de Agendamento</label>
                    <input placeholder='Data de Agendamento' name='data' onChange={(e) => setData(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["data"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
                </Form.Field>
                <Form.Field>
                    <label>Horário de Agendamento</label>
                    <input placeholder='Horário de Agendamento' name='hora' onChange={(e) => setHora(e.target.value)} onBlur={(e) => handleChange(e)}/>
                    {emptyValue && form["hora"] ? <span className="emptyText">O campo precisa ser preenchido</span> : ""}
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