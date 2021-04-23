import React, { Component } from 'react';
import { Container, Alert, Button, Form } from 'react-bootstrap';
import './style.css'

import api from '../../api/api'

export default class Editar extends Component {

    constructor(props){
        super(props)

        this.onChangeReuniaoTitulo = this.onChangeReuniaoTitulo.bind(this)
        this.onchangeRauniaoFoto = this.onchangeRauniaoFoto.bind(this)
        this.onChangeReuniaoColaboradores = this.onChangeReuniaoColaboradores.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            titulo: this.titulos,
            Foto: '',
            colaboradores: ''
        }}

    componentDidMount() {
    const response =api.get('meetings/'+ this.props.match.params.id)
    .then(res => {
        this.setState({
            titulo: this.state.titulo,
            titulos: response.titulo,
            Foto: this.state.Foto,
            colaboradores: this.state.colaboradores
        })
    })
    .catch((err) => {
        console.log(err)
    })
}

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

    api.put('meetings/' + this.props.match.params.id, userObject)
    .then((res) => {
                console.log(res.data)
                console.log('Reunião atualizada com sucesso!')
            }).catch((err) => {
                console.log(err)
            })

            //Redirecionar para a página principal
            this.props.history.push('/')
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
                        <Form.Control type="text" value={this.state.titulo} onChange={this.onChangeReuniaoTitulo} />
                    </Form.Group>

                    <Form.Group controlId="Foto">
                        <Form.Label>FOTO</Form.Label>
                        <Form.Control type="text" value={this.state.Foto} onChange={this.onchangeRauniaoFoto} />
                    </Form.Group>
                    
                    <Form.Group controlId="colaboradores">
                        <Form.Label>Colaboradores</Form.Label>
                        <Form.Control as="textarea" value={this.state.colaboradores} rows={3} onChange={this.onChangeReuniaoColaboradores} />
                    </Form.Group>
                    
                    <Button variant="primary" size="lg" block="block" type="submit">
                        Atualizar
                    </Button>

                </form>

            </Container>
            </>
    )
}}