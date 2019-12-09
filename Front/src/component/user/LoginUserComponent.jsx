import React, { Component } from 'react'
//import ApiService from "../../service/ApiService";
import { Container, Col, Row, Card, FormGroup } from "reactstrap";

class LoginUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            bairro: '',
            celular: '',
            cep: '',
            cidade: '',
            cpf: '',
            email: '',
            nome: '',
            telefone: '',
            uf: '',
            usuario: '',
            senha: ''
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {


        this.props.history.push('/users');

    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Login</h2>
                <Container>


                    <Row>
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="8"> <Row>
                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                <Card>
                                    <FormGroup>
                                        <div className="text-left mt-3">
                                            <div className="form-group">
                                                <label>Usuario:</label>
                                                <input type="text" placeholder="usuario" name="usuario" className="form-control" defaultValue={this.state.usuario} />
                                            </div>
                                        </div>
                                        <div className="text-left mt-3">
                                            <div className="form-group">
                                                <label>Senha:</label>
                                                <input type="text" placeholder="senha" name="senha" className="form-control" defaultValue={this.state.senha} />
                                            </div>
                                        </div>
                                    </FormGroup>
                                </Card> <button className="btn btn-success" onClick={this.saveUser}>Entrar</button>
                            </Col>
                        </Row></Col>
                        <Col sm="4"></Col>
                    </Row>



                </Container>




            </div>
        );
    }
}

export default LoginUserComponent;