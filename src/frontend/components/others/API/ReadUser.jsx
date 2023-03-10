import { Table } from 'semantic-ui-react'
import axios from "axios";
import React from "react";
import './CardStyle.css'

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

    const arr = post.map((post, index) => {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{post.nome}</Table.Cell>
                    <Table.Cell>{post.sobrenome}</Table.Cell>
                    <Table.Cell>{post.email}</Table.Cell>
                    <Table.Cell>{post.telefone}</Table.Cell>
                    <Table.Cell>{post.data}</Table.Cell>
                    <Table.Cell>{post.hora}</Table.Cell>
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
                        <Table.HeaderCell>Telefone</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                        <Table.HeaderCell>Horário</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {arr}
            </Table>

        </section>
    );
}