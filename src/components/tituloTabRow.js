import React, { Component } from 'react';
import './pages/style.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import api from '../api/api'

export default class TituloTabRow extends Component {

    constructor(props){
        super(props)
        this.deleteReuniao = this.deleteReuniao.bind(this)
    }

    deleteReuniao(){
    api.delete('meetings/' + this.props.obj._id)
    .then((res) => {
                console.log(res.data)
                console.log('Reunião deletada com sucesso!')
            }).catch((err) => {
                console.log(err)
            })
    }


    render(){
        return(
                    <tr>
                        <td>{this.props.obj.titulo}</td>
                        <td>{this.props.obj.Foto}</td>
                        <td>{this.props.obj.colaboradores}</td>
                        <td>{this.props.obj.updatedAt}</td>
                        <td>
                            <Link to={"/editar/"+this.props.obj._id}>
                                <Button type="submit" size="sm" variant="primary">
                                    Editar
                                </Button>
                            </Link>
                                <Button onClick={this.deleteReuniao} size="sm" variant="danger">
                                    Delete
                                </Button>
                        </td>
                    </tr> 
            
        )
    }
}