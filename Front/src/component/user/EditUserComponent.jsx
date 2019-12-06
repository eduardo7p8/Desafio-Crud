import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import {
    Col, Row
} from "reactstrap";

class EditUserComponent extends Component {

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
            uf: ''
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        window.localStorage.setItem("userId", '1');
        console.log(window.localStorage.getItem("userId"));
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data;
                console.log(user);
                this.setState({
                    id: user.id,
                    bairro: user.bairro,
                    celular: user.celular,
                    cep: user.cep,
                    cidade: user.cidade,
                    cpf: user.cpf,
                    email: user.email,
                    nome: user.nome,
                    telefone: user.telefone,
                    uf: user.uf,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            bairro: this.state.bairro,
            celular: this.state.celular,
            cep: this.state.cep,
            cidade: this.state.cidade,
            cpf: this.state.cpf,
            email: this.state.email,
            nome: this.state.nome,
            telefone: this.state.telefone,
            uf: this.state.uf
        };
        ApiService.editUser(user).then(res => {
            this.setState({ message: 'Editado com sucesso.' });
            this.props.history.push('/users');
        });
    }

    render() {
        return (
            <div>


                <h2 className="text-center">Edit User</h2>
                <form>
                    <Row>
                        <Col xs="6" sm="6" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <label>Nome:</label>
                                <input type="text" placeholder="nome" name="nome" className="form-control" readonly="true" defaultValue={this.state.nome} />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label>Celular</label>
                                <input placeholder="Celular" name="celular" className="form-control" value={this.state.celular} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label>Telefone</label>
                                <input type="number" placeholder="Telefone" name="telefone" className="form-control" value={this.state.telefone} onChange={this.onChange} />
                            </div>


                            <div className="form-group">
                                <label>Cpf:</label>
                                <input type="number" placeholder="cpf" name="cpf" className="form-control" value={this.state.cpf} onChange={this.onChange} />
                            </div>
                        </Col>

                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <label>Cep:</label>
                                <input placeholder="cep" name="cep" className="form-control" value={this.state.cep} onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label>Cidade:</label>
                                <input placeholder="cidade" name="cidade" className="form-control" value={this.state.cidade} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>bairro:</label>
                                <input placeholder="Bairro" name="bairro" className="form-control" value={this.state.bairro} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label>UF:</label>
                                <input placeholder="UF" name="uf" className="form-control" value={this.state.uf} onChange={this.onChange} />
                            </div>
                        </Col>
                    </Row>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>


            </div >
        );
    }
}

export default EditUserComponent;