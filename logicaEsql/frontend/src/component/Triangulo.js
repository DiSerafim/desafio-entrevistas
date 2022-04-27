import React, { useState } from "react";
import './Triangulo.css';

const Triangulo = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [value3, setValue3] = useState();
    const [result, setResult] = useState('#####');

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((value1 === value2 && value1 === value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("equilátero - Possui seus 3 lados com a mesma medida.");
        } else if ((value1 === value2 || value1 === value3 || value2 === value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("isósceles - Possui dois de seus lados com a mesma medida.");
        } else if ((value1 !== value2 && value1 !== value3) && (value1 > 0 && value2 > 0 && value3 > 0)) {
            setResult("escaleno - Cada lado possui uma medida diferente.");
        } else {
            setResult("inválido - Algum erro nos valores inseridos!");
        }
    }

    return (    
        <div className="tri">
            <div className="question">
                <p>1 - Desenvolva um código permitindo ao usuário digitar os 3 lados de um triângulo.</p>
                <p>Baseado nos 3 valores digitados, deverá ser exibido se o triangulo é “inválido”, “equilátero”, “isósceles” ou “escaleno”.</p>
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
                <div className="saida">
                    <p className="result">Resultado.. </p>
                    <span>{result}</span>
                    <p className={result}></p>
                </div>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Triangulo;