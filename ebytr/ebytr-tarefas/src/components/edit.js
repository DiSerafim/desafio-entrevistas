import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router';

class Edit extends Component {
  // constructor que armazena os dados
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
    this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      person_position: '',
      person_level: '',
      records: [],
    };
  }

  // pega o registro pelo id
  componentDidMount() {
    axios.get('http://localhost:5000/record/' + this.props.match.params.id)
    .then((response) => {
      this.setState({
        person_name: response.data.person_name,
        person_position: response.data.person_position,
        person_level: response.data.person_level,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // Atualiza as propriedades do esado
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

  // Trata o envio
  onSubmit(e) {
    e.preventDefault();
    const newEditedPerson = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_level: this.state.person_level,
    };
    console.log(newEditedPerson);

    // envia uma solicitação de para atualizar os dados no DB
    axios
      .post('http://localhost:5000/update' + this.props.match.params.id, newEditedPerson)
      .then((res) => console.log(res.data));
    this.props.history.push('/');
  }

  // form de atualização
  render() {
    return (
      <div>
        <h3 align="center">Atualizar</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Posição</label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.person_level === "Junior"}
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
          <br />
 
          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);