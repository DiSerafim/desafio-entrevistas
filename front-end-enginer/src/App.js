import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import logo from './images/Logo-Tractian.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      units: [],
      companies: [],
      users: [],
      DataisLoaded: false
    };
  }
  
  componentDidMount() {
    this.fetchApi();
    this.fetchUnits();
    this.fetchCompanies();
    this.fetchUsers();
  }

  async fetchApi() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/assets")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchCompanies() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/companies")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        companies: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchUnits() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/units")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        units: json,
        DataisLoaded: true,
      });
    })
  }

  async fetchUsers() {
    await fetch("https://my-json-server.typicode.com/tractian/fake-api/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          users: json,
          DataisLoaded: true,
        });
      })
  }

  render() {
    const { DataisLoaded, items, units, companies, users } = this.state;
    if (!DataisLoaded) return <div>
      <h1>Por favor espere um pouco....</h1>
    </div>;

    const options = {
      title: {
        text: 'Gráfico'
      },
        
      series: [{
        data: [
          items,
          items.specificationsMaxTemp,
          items.status,
          items.healthscore,
          items.metricsTotalCollectsUptime,
          items.metricsTotalUptime,
          items.metricsLastUptimeAt,
        ]
      }]
    }
    console.log(options.series, 'Seriesss');

    // const data = items
        // let name = 0,
        //   model = 0,
        //   specificationsMaxTemp = 0,
        //   status = 0,
        //   healthscore = 0,
        //   metricsTotalCollectsUptime = 0,
        //   metricsTotalUptime = 0,
        //   metricsLastUptimeAt = 0,
        //   unitId = 0,
        //   companyId = 0;

    return (
      <div className="App">
        <div>
          
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Desafio Front-End Software Engineer
          </h1>
        </header>
        <div className="objective">
          <h1>Ativos</h1>
        </div>
        <section>
          {
            items.map((item) => (
              <div >
              <div key={ item.id } className="card">
                <img src={ item.image } alt="item.name" className="thumb" />
                <article>
                  <p>Item: <span>{ item.name }</span></p>
                  <p>Modelo:  <span>{ item.model }</span></p>
                  <p>Especificações (maxTemp): <span>{ item.specifications.maxTemp }</span></p>
                  <p>Status: <span>{ item.status }</span></p>
                  <p>Avaliação: <span>{ item.healthscore }</span></p>
                  <p>Métricas:<br />
                    - <span>Atividade maxima: { item.metrics.totalCollectsUptime }</span><br />
                    - <span>Tempo de Atividade: { item.metrics.totalUptime }</span><br />
                    - <span>Última atividade: { item.metrics.lastUptimeAt }</span><br />
                  </p>
                  <p>Unidade: <span>{ item.unitId }</span></p>
                  <p>Empresa: <span>{ item.companyId }</span></p>
                </article>
              </div>
              </div>
            ))
          }
        </section>

        <div className="objective">
          <h1>Empresas, unidades e usuários;</h1>
        </div>
        <section>
          {
            companies.map((compani) => (
              <div>
                <div key={ compani.id } className="card">
                  <article>
                    <p>Empresa</p>
                    <p>Nome: <span>{ compani.name }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
          {
            units.map((unit) => (
              <div>
                <div key={ unit.id } className="card">
                  <article>
                    <p>Endereço</p>
                    <p>Local: <span>{ unit.name }</span></p>
                    <p>Id:  <span>{ unit.id }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
          {
            users.map((user) => (
              <div>
                <div key={ user.id } className="card">
                  <article>
                    <p>Funcionário</p>
                    <p>Nome: <span>{ user.name }</span></p>
                    <p>Email: <span>{ user.email }</span></p>
                    <p>Empresa Id: <span>{ user.unitId }</span></p>
                  </article>
                </div>
              </div>
            ))
          }
        </section>

        <div className="objective">
          <h1>Gráficos</h1>
          </div>
          <div className="highcharts">
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'stockChart'}
              options={options}
            />
          </div>
      </div>
    );
  }
}

export default App;
