import React from "react";
import './Fibonacci.css';

const Fibonacci = () => {
    return (
        <div className="fi">
            <div className="question">
            Desenvolva uma aplicação para exibir na tela, com o uso de recursividade, os 30 primeiros resultados da “Sequência de Fibonacci”.
            </div>
            <div className="rules">
                <ul>
                    Regras:
                    <li>
                        Sequencia básica de Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
                    </li>
                </ul>
            </div>
            <div className="result">
                <h3>Resultado</h3>
                <form>
                    <input />
                    <button>Ver</button>
                </form>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Fibonacci;