import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function updateUser() {

  const [id, setID] = useState(null);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    setID(localStorage.getItem('id'))
    setNome(localStorage.getItem('nome'));
    setSobrenome(localStorage.getItem('sobrenome'));
    setEmail(localStorage.getItem('email'))
    setTelefone(localStorage.getItem('telefone'));
    setData(localStorage.getItem('data'));
    setHora(localStorage.getItem('hora'))
  }, []);

  const updateAPIData = () => {
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
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nome</label>
          <input placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Sobrenome</label>
          <input placeholder='Sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Telefone</label>
          <input placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Data de Agendamento</label>
          <input placeholder='Data de Agendamento' value={data} onChange={(e) => setData(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Horário de Agendamento</label>
          <input placeholder='Horário de Agendamento' value={hora} onChange={(e) => setHora(e.target.value)} />
        </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  );
}