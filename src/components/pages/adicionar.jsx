import React, { Component } from 'react';
import './style.css'
import { Container, Alert, Button, Form } from 'react-bootstrap';

import api from '../../api/api'

export default class Adicionar extends Component{

    constructor(props){
        super(props)

        this.onChangeReuniaoTitulo = this.onChangeReuniaoTitulo.bind(this)
        this.onchangeRauniaoFoto = this.onchangeRauniaoFoto.bind(this)
        this.onChangeReuniaoColaboradores = this.onChangeReuniaoColaboradores.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
    this.state = {
        titulo: '',
        Foto: '',
        colaboradores: ''
    }}

    onChangeReuniaoTitulo(event){
        this.setState({ titulo: event.target.value})
    }

    onchangeRauniaoFoto(event){
        this.setState({ Foto: event.target.value})
    }

    onChangeReuniaoColaboradores(event){
        this.setState({ colaboradores: event.target.value})
    }

    onSubmit(event){
        event.preventDefault()

        const userObject = {
            titulo: this.state.titulo,
            Foto: this.state.Foto,
            colaboradores: this.state.colaboradores
        }
    
    api.post('meetings', userObject)
    .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })

            this.setState({ titulo: '', Foto: '', colaboradores: ''})
    }

    render(){
        return(

            <>
            <Container fluid>

            <Alert variant='primary' className="title">
                <h1>METTING</h1>
            </Alert>

            <Alert variant='primary' className="title">
                <strong>REUNIÃO</strong>
            </Alert>

                <form onSubmit={this.onSubmit}>
                    <Form.Group controlId="titulo">
                        <Form.Label>TITULO</Form.Label>
                        <Form.Control type="text" value={this.state.titulo} placeholder="Digitar titulo" onChange={this.onChangeReuniaoTitulo} />
                    </Form.Group>

                    <Form.Group controlId="Foto">
                        <Form.Label>FOTO</Form.Label>
                        <Form.Control type="text" value={this.state.Foto} placeholder="Digitar nome Foto" onChange={this.onchangeRauniaoFoto} />
                    </Form.Group>
                    
                    <Form.Group controlId="colaboradores">
                        <Form.Label>Colaboradores</Form.Label>
                        <Form.Control as="textarea" value={this.state.colaboradores} rows={3} placeholder="Nome dos colaboradores" onChange={this.onChangeReuniaoColaboradores} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </form>

            </Container>
            </>
        )
    }    
}