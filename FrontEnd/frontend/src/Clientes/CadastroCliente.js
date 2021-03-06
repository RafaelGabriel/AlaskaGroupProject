import React, { Component } from 'react'
import Layout from '../Layout/Layout';
import Conexao from '../Conexao/Conexao';
import { browserHistory } from 'react-router'
export default class CadastroCliente extends Component {
    constructor(props) {
        super(props)
        this.state = {

            nome: "",
            cpf: "",
            telefone: "",
            endereco: "",
            bairro: "",
            cep: "",
            cidade: "",
            estado: "",
            ativo: true,
            erro: null
        }

        this.setNome = this.setNome.bind(this)
        this.setCpf = this.setCpf.bind(this)
        this.setTelefone = this.setTelefone.bind(this)
        this.setEndereco = this.setEndereco.bind(this)
        this.setBairro = this.setBairro.bind(this)
        this.setCep = this.setCep.bind(this)
        this.setCidade = this.setCidade.bind(this)
        this.setEstado = this.setEstado.bind(this)
        this.setAtivo = this.setAtivo.bind(this)
        this.enviarParaBackEnd = this.enviarParaBackEnd.bind(this);
    }


    setNome(e) {

        this.setState({
            nome: e.target.value,
        })

    }

    setCpf(e) {
        this.setState({
            cpf: e.target.value,
        })
    }
    setTelefone(e) {
        this.setState({
            telefone: e.target.value,
        })
    }
    setEndereco(e) {
        this.setState({
            endereco: e.target.value,
        })
    }
    setBairro(e) {
        this.setState({
            bairro: e.target.value,
        })
    }
    setCep(e) {
        this.setState({
            cep: e.target.value,
        })
    }
    setCidade(e) {
        this.setState({
            cidade: e.target.value,
        })
    }
    setEstado(e) {
        this.setState({
            estado: e.target.value,
        })
    }
    setAtivo(e) {
        this.setState({
            ativo: e.target.value,
        })
    }
    enviarParaBackEnd() {
        console.log(this.state)
        Conexao.post("/Cliente", { 
            nome: this.state.nome,
            cpf: this.state.cpf,
            telefone: this.state.telefone,
            endereco: this.state.endereco,
            bairro: this.state.bairro,
            cep: this.state.cep,
            cidade: this.state.cidade,
            estado: this.state.estado,
            ativo: this.state.ativo

         }).then(resposta => {
            const dados = resposta.data;
            console.log(dados.erro)
            if (dados.erro != null) {
                this.setState({ erro: dados.erro });
            } else {
                alert("deu");
                this.props.history.push('/ListaClientes')
            }
        }).catch(error => {
           console.log(error)
        })


    }
    render() {
        return (
            <Layout>
                {this.state.erro != null ?
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {this.state.erro}
                        <button type="button" onClick={() => this.setState({ erro: null })} className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    : ""}

                <div className="row">

                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" id="nome" name="nome" value={this.state.nome} onChange={this.setNome} />
                        </div>
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control" id="cpf" name="cpf" value={this.state.cpf} onChange={this.setCpf} />
                        </div>
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control" name="telefone" value={this.state.telefone} onChange={this.setTelefone} />
                        </div>
                        <div className="form-group">
                            <label>Endereço</label>
                            <input type="text" className="form-control" name="endereco" value={this.state.endereco} onChange={this.setEndereco} />
                        </div>
                        <div className="form-group">
                            <label>Bairro</label>
                            <input type="text" className="form-control" name="bairro" value={this.state.bairro} onChange={this.setBairro} />
                        </div>
                        <div className="form-group">
                            <label>CEP</label>
                            <input type="text" className="form-control" name="cep" value={this.state.cep} onChange={this.setCep} />
                        </div>
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control" name="cidade" value={this.state.cidade} onChange={this.setCidade} />
                        </div>
                        <div className="form-group">
                            <label>Estado</label>
                            <input type="text" className="form-control" name="estado" value={this.state.estado} onChange={this.setEstado} />
                        </div>
                        <div className="form-group">
                            <label>Ativo</label>
                            <input type="checkbox" className="form-control" name="ativo" value={this.state.ativo} onChange={this.setAtivo} />
                        </div>
                        <button className="btn btn-success" onClick={this.enviarParaBackEnd}>Salvar</button>
                    </div>
                    <div className="col-4"></div>

                </div>
            </Layout>);
    }
}

