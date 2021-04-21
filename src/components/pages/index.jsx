import React from 'react';
import './style.css'
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';

export default () => 
<>

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
                <th colSpan='2'>Objetivo da Reunião</th>
                <th className="v_e_e">Ver</th>
                <th className="v_e_e">Editar</th>
                <th className="v_e_e">Excluir</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td colSpan='2'>Texto reunião</td>
                <td>I1</td>
                <td>I2</td>
                <td>I3</td>
            </tr>
        </tbody>
        </Table>

    </Container>

</>