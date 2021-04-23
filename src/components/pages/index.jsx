import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import TituloTabRow from '../tituloTabRow'

import api from '../../api/api'

class Index extends Component{

    constructor(props){
        super(props)

        this.state = {
            titulos: []
        }
    }

    async componentDidMount() {
        const response = await api.get('meetings')
        console.log(response.data)
        this.setState({titulos: response.data})
    }

    DataTable(){
        return this.state.titulos.map((res, i) => {
            return <TituloTabRow obj={res} key={i} />
        })
    }

    render(){
        return(

            <Container fluid>
                <>

                   <div className="table-wrapper">
        <Alert variant='primary' className="title">
            <h1>METTING</h1>
        </Alert>

        <Row>
            <Col>
                <Link to="/adicionar">
                    <Button variant="primary">
                        ADICIONAR
                    </Button>
                </Link>
            </Col>
        </Row>

        <br/>

        {/* Tabela para exibir os dados */}
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Reuniões</th>
                <th>Fotos</th>
                <th>Colaboradores</th>
                <th>Data/Hora</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
                {this.DataTable()}
        </tbody>
        </Table>
        </div> 

                </>
            </Container>
            
        )
    }
}

export default Index