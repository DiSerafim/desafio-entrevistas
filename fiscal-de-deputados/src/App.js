import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [governantes, setGovernantes] = useState([]);
  
  useEffect(() => {
    const getDeputadosData = async () => {
      await fetch("https://dadosabertos.camara.leg.br/api/v2/deputados")
        .then((response) => response.json())
        .then((data) => {
          const deputados = data.map((dados) => ({
              name: dados.dados.siglaUf,
              value: dados.dados.siglaUf,
            }));
          console.log(data);
          console.log(data.links);
          console.log(data.links[0].href);
          console.log(data.dados[0].nome);
          console.log(data.dados[1].siglaUf);
          setGovernantes(deputados);
          console.log(deputados);
        });
    };
    // console.log(getDeputadosData);
    getDeputadosData();
  }, []);

  return (
    <div className="app">
      <div className='app__header'>
        {/* Título */}
        <h1>Fiscal de Deputados</h1>
        <FormControl className="app__dropdown">
          {/* percorre todos os estados e mostra uma lista suspensa das opções */}
          <Select
            variant="outlined"
            value="abc"
          >
            {
              governantes.map((dados) => (
                <MenuItem value={dados.value}>{dados.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
      {/* Formulário */}
      
      {/* Heade */}
      {/* Titulo + Select imput */}

      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}
      {/* InfoBox */}

      {/* Tabela */}
      {/* Gráfico */}

      {/* Mapa */}
    </div>
  );
}

export default App;
