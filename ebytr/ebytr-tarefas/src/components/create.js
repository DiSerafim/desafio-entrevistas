import React, { Component } from "react";
import axios from 'axios';

export default class Create extends Component {
  // constructor que armazena os dados
  constructor(props) {
    super(props);
    // ao mudar o nome
    this.onChangePersonName = this.onChangePersonName.bind(this);
    // ao mudar a posição
    this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
    // nivel de mudança
    this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
    // ao enviar
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      person_position: '',
      person_level: '',
    }
  }

  // aualiza as propriedades do estado
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
  onChangePersonPosition(e) {
    this.setState({
      person_position: e.target.value,
    });
  }
  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }

  // trata o envio
  onSubmit(e) {
    e.preventDefault();
    // quando enviado para a url Create, axios adicionará um novo registro ao DB
    const newPerson = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_level: this.state.person_level,
    };

    axios.post('http://localhost:5000/record/add', newPerson)
    .then((res) => console.log(res.data));
    
    // zera o estado do post após a postagem
    this.setState({
      person_name: '',
      person_position: '',
      person_level: '',
    });
  }
  // exibe o form que recebe a entrada do user
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Criar novo registro</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Posição:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-control">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.person_level === "Senior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Senior</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create person"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
};