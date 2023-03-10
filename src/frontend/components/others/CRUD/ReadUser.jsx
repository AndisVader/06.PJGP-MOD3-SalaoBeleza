import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from "axios";
import React from "react";
import './Crud.css'

const baseURL = "http://localhost:3001/Usuario";

export default function Read() {
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        }).catch(error => {
            setError(error);
        });
    }, []);

    if (error) return `Error: ${error.message}`;
    if (!post) return "No post!"

    const setCrud = (post) => {
        let { nome, sobrenome, email, telefone, data, hora, id } = post;
        localStorage.setItem('nome', nome);
        localStorage.setItem('sobrenome', sobrenome);
        localStorage.setItem('email', email);
        localStorage.setItem('telefone', telefone);
        localStorage.setItem('data', data);
        localStorage.setItem('hora', hora);
        localStorage.setItem('ID', id);
    }

    const onDelete = (id) => {
        axios.put(`http://localhost:3001/Usuario/${id}`)
        .then(() => {
            setPost();
        })
    }

    const arr = post.map((post) => {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{post.nome}</Table.Cell>
                    <Table.Cell>{post.sobrenome}</Table.Cell>
                    <Table.Cell>{post.email}</Table.Cell>
                    <Table.Cell>{post.telefone}</Table.Cell>
                    <Table.Cell>{post.data}</Table.Cell>
                    <Table.Cell>{post.hora}</Table.Cell> 
                        <Link to='/Atualizar'>
                            <Table.Cell>
                                <Button onClick={() => setCrud(post)}>Update</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell>
                            <Button onClick={() => onDelete(post.id)}>Delete</Button>
                        </Table.Cell>
                </Table.Row>
            </Table.Body>
        );
    })

    return (
        <section className="carrousel">
            <h1>Lista de nossos Horários </h1>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>T
                            elefone</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                        <Table.HeaderCell>Horário</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {arr}
            </Table>

        </section>
    );
}