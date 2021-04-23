import React, { Component } from 'react';
import './style.css'
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import TituloTabRow from '../tituloTabRow'

import api from '../../api/api'

class Index extends Component{

    constructor(props){
        super(props)
        // this.deleteReuniao = this.deleteReuniao.bin(this)

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

    // deleteReuniao(){
    //     api.delete('meetings'+ this.props.obj._id)
    //     .then((res) => {
    //         console.log('Reunião deletada com sucesso!')
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    

   

    // async remove(titulos){
    //     const response = await api.delete('meetings')
    // }

    render(){
        return(
        <Container fluid>
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
                <th colSpan='2'>Reuniões</th>
            </tr>
        </thead>
        <tbody>
            <td colSpan='2'>
                {this.DataTable()}
            </td>
        </tbody>
        </Table>
    </Container>
        )
    }
}

export default Index