import React from "react";
import './Triangulo.css';

const Triangulo = () => {
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
                    <li>
                        Um triangulo isósceles possui dois de seus lados com a mesma medida.
                    </li>
                    <li>
                        Um triangulo equilátero possui seus 3 lados com a mesma medida.
                    </li>
                    <li>
                        Um triangulo escaleno possui cada lado com uma medida diferente.
                    </li>
                </ul>
            </div>
            <div className="result">
                <h3>Resultado:</h3>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Triangulo;