import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';

import api from '../../api/api'

class Index extends Component{

    state = {
        titulos: []
    }

    async componentDidMount() {
        const response = await api.get('meetings')
        //console.log(response.data)
        this.setState({titulos: response.data})
    }

    render(){

        const {titulos} = this.state

        return(

            <Container fluid>
        <Alert variant='primary' className="title">
            <h1>METTING</h1>
        </Alert>

        <Row>
            <Col>
                <Button variant="primary">ADICIONAR</Button>
            </Col>
        </Row>

        <br/>

        {/* Tabela para exibir os dados */}
        <Table striped bordered hover>
        <thead>
            <tr>
                <th className="id">#</th>
                <th colSpan='2'>Reuniões</th>
                <th className="v_e_e">Ver</th>
                <th className="v_e_e">Editar</th>
                <th className="v_e_e">Excluir</th>
            </tr>
        </thead>
        <tbody>
        {titulos.map(titulo => (
            <tr>
                <td>1</td>
                <td colSpan='2' key={titulos._id} >{titulo.titulo}</td>
                <td>I1</td>
                <td>I2</td>
                <td>I3</td>
            </tr>
            ))}
        </tbody>
        </Table>

    </Container>

        )
    }
}

export default Index