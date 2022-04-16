import React, { useState } from "react";
import './Triangulo.css';

const Triangulo = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [result, setResult] = useState('Resultado..  (-*_*-)');

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((value1 === value2 && value1 === value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("equilátero - Possui seus 3 lados com a mesma medida.");
        } else if ((value1 === value2 || value1 === value3 || value2 === value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("isósceles - Possui dois de seus lados com a mesma medida.");
        } else if ((value1 !== value2 && value1 !== value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("escaleno - Cada lado possui uma medida diferente.");
        } else {
            setResult("inválido - Valor inválido");
        }
    }

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     console.log(setValue1`valor-01 ${value1}`,setValue2`valor-02 ${value2}`,setValue3`valor-03 ${value3}`)
    // }

    return (    
        <div className="tri">
            <div className="question">
                Desenvolva um código permitindo ao usuário digitar os 3 lados de um triângulo. Baseado nos 3 valores digitados, deverá ser exibido se o triangulo é “inválido”, “equilátero”, “isósceles” ou “escaleno”.
            </div>
            <div className="rules">
                <ul>
                    Regras:
                    <li>
                        Um triângulo existe se, somente se, um de seus lados for maior que a diferença dos outros dois lados, e menor que a soma dos outros dois lados.
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
                    <input
                        onChange={(e) => setValue2(e.target.value)}
                        placeholder="insira um valor"
                        required
                        value={value2}
                        type='text'
                    />
                    <input
                        onChange={(e) => setValue3(e.target.value)}
                        placeholder="insira um valor"
                        required
                        value={value3}
                        type='text'
                    />
                    <button onClick={handleSubmit}>Ver</button>
                </form>
                <span className={result}>{result}</span>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Triangulo;