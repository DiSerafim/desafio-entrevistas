import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="select"
          >
            <MenuItem value="presidentes">Presidentes</MenuItem>
            <MenuItem value="senadores">Senadores</MenuItem>
            <MenuItem value="deputados-federais">Deputados Federais</MenuItem>
            <MenuItem value="deputados-estaduais">Deputados Estaduais</MenuItem>
            <MenuItem value="governadores">Governadores</MenuItem>
            <MenuItem value="prefeitos">Prefeitos</MenuItem>
            <MenuItem value="vereadores">Vereadores</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* Título */}
      <h1>Fiscal de Deputados</h1>
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
