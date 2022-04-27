import React, { useState } from "react";
import './Fibonacci.css';

const Fibonacci = () => {
    const [value1, setValue1] = useState();
    let [result, setResult] = useState([0 ,1]);

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < value1; i += 1) {
            if (i > 1) {
                // document.write(setResult[i] = setResult[i - 1] + setResult[i - 2]);
                setResult[i] = setResult[i - 1] + setResult[i - 2];
                document.write(' ' + setResult[i]);
                // setResult(' ' + setResult[i]);
            } else {
                document.write(setResult[i] = 1);
                // setResult(setResult[i] = 1);
            }
          }
    };

    return (
        <div className="fi">
            <div className="question">
                <p>2 - Desenvolva uma aplicação para exibir na tela, com o uso de recursividade, os 30 primeiros resultados da “Sequência de Fibonacci”.</p>
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
                <h3>Resultado:</h3>
                <form>
                    <input
                        onChange={(e) => setValue1(e.target.value)}
                        placeholder="insira um valor"
                        required
                        value={value1}
                        type='text'
                    />

                    <button onClick={handleSubmit}>Ver</button>
                </form>
                <div>
                    <p>Resultado..</p>
                    <span>{result} - A resposta será exibida em uma nova pagina.</span>
                </div>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Fibonacci;