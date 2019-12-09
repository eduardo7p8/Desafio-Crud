import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import { Col, Row, Alert } from "reactstrap";
import apiViaCep from 'react-via-cep';
import NumberFormat from "react-number-format";
//import { existsTypeAnnotation } from '@babel/types';

class AddUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client_logradouro: "",
            client_bairro: "",
            cliente_cidade: "",
            cliente_uf: "",
            form: {
                id: '',
                bairro: '',
                celular: '',
                cidade: '',
                cpf: '',
                email: '',
                nome: '',
                telefone: '',
                uf: '',
                client_logradouro: "",
                client_bairro: "",
                cliente_cidade: "",
                cliente_uf: "",
                cep: ""
            },
            message: "",
            visible: false,
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();




        let user = {
            id: this.state.form.id,
            bairro: this.state.form.bairro,
            celular: this.state.form.celular,
            cep: this.state.form.cep,
            cidade: this.state.form.cidade,
            cpf: this.state.form.cpf,
            email: this.state.form.email,
            nome: this.state.form.nome,
            telefone: this.state.form.telefone,
            uf: this.state.form.uf



        };
        console.log('aqui', user);
        return
        ApiService.addUser(user)
            .then(res => {
                this.setState({ message: 'Salvo com sucesso.' });
                this.props.history.push('/users');
            });
    }
    /**
 * ENVIA OS CAMPOS PARA O STATO FORM
 */
    handleChange = fieldname => event => {
        const form = { ...this.state.form };
        form[fieldname] = event.target.value;

        console.log('vendo', form['cep']);
        if (form['cep'] != '') {
            this.getDataFromViaCep(form['cep']);

        }
        console.log('chegou', this.state.client_logradouro);
        this.setState({ form });
    };

    closeAlert() {

        this.setState({
            visible: false
        });
    }

    getDataFromViaCep = async (cep) => {

        if (cep.length === 10) {
            cep = cep.replace('.', "").replace('-', "")
            const form = { ...this.state.form }
            try {
                const response = await apiViaCep.get(`${cep}/json`)

                console.log('oi', response);
                if (!response.data.erro) {
                    this.setState({
                        client_logradouro: response.data.logradouro,
                        client_bairro: response.data.bairro,
                        cliente_cidade: response.data.localidade,
                        cliente_uf: response.data.uf
                    })
                }

            } catch (error) {
                console.log(error)
                this.setState({
                    visible: true,
                    message: "Cep Não encontrado!!",
                });
            }

        }
    }

    onChange = (e) =>

        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>





                <h2 className="text-center">Add User</h2>
                <form>
                    <Row>
                        <Col xs="6" sm="6" md="6" lg="6" xl="6">
                            <div className="form-group">


                                <label>Nome:</label>
                                <input type="text" placeholder="nome" name="nome" className="form-control" defaultValue={this.state.nome} onChange={this.handleChange("nome")} />
                            </div>
                            <pre>{JSON.stringify(this.state)}</pre>

                            <div className="form-group">
                                <label>Email:</label>
                                <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange("email")} />
                            </div>

                            <div className="form-group">
                                <label>Celular</label>
                                <NumberFormat
                                    type="text"
                                    className="form-control"
                                    value={this.state.form.celular}
                                    placeholder="Celular"
                                    format="(##) # ####-####"
                                    onChange={this.handleChange("celular")}
                                />
                            </div>

                            <div className="form-group">
                                <label>Telefone</label>
                                <NumberFormat
                                    type="text"
                                    className="form-control"
                                    value={this.state.form.tel_particular}
                                    placeholder="Telefone particular"
                                    format="(##)####-####"
                                    onChange={this.handleChange("telefone")}
                                />
                            </div>


                            <div className="form-group">
                                <label>Cpf:</label>
                                <NumberFormat
                                    type="text"
                                    className="form-control"
                                    value={this.state.form.cpf}
                                    placeholder="CPF"
                                    format="###.###.###-##"
                                    onChange={this.handleChange("cpf")}
                                />
                            </div>




                        </Col>
                        <Alert
                            color="success"
                            isOpen={this.state.visible}
                            toggle={this.closeAlert}
                            fade={false}
                        >
                            {this.state.message}
                        </Alert>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                            <div className="form-group">
                                <label>Cep:</label>
                                <NumberFormat
                                    type="text"
                                    className="form-control"
                                    value={this.state.form.cep}
                                    placeholder="CEP"
                                    format="##.###-###"
                                    onChange={this.handleChange("cep")}
                                />

                            </div>

                            <div className="form-group">
                                <label>Cidade:</label>
                                <input placeholder="cidade" name="cidade" className="form-control" value={this.state.cidade} onChange={this.handleChange("cidade")} />
                            </div>
                            <div className="form-group">
                                <label>bairro:</label>
                                <input placeholder="Bairro" name="bairro" className="form-control" value={this.state.bairro} onChange={this.handleChange("bairro")} />
                            </div>
                            <div className="form-group">
                                <label>UF:</label>
                                <input placeholder="UF" name="uf" className="form-control" value={this.state.uf} onChange={this.handleChange("uf")} />
                            </div>
                        </Col>
                    </Row>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;