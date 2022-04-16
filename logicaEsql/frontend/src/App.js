import React from 'react';
import Header from './component/Header.js';
import Triangulo from './component/Triangulo.js';
import Fibonacci from './component/Fibonacci.js';
import Diagrama from './component/Diagrama.js';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Triangulo />
        <Fibonacci />
        <Diagrama />
      </main>
    </div>
  );
}

export default App;
