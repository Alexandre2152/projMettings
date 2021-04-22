import React, { Component } from 'react';

import api from './api'

class Listar extends Component {
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
        //console.log(titulos)

        return(
            <div>
                <h1>teste</h1>
                {titulos.map(titulo => (
                   
                    <h1  key={titulos._id} >{titulo.titulo}</h1>
                ))}
            </div>
        )
    }
}

export default Listar