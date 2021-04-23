import React, { Component } from 'react';
import './pages/style.css'
import { Container, Row, Col, Alert, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default class TituloTabRow extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.obj.titulo}</td>
                <td>{this.props.obj.Foto}</td>
                <td>{this.props.obj.colaboradores}</td>
                <td>
                    <Link to={"/editar/"+this.props.obj._id}>
                        <Button size ="sm" variant="primery">Edit</Button>
                    </Link>
                        <Button size ="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}