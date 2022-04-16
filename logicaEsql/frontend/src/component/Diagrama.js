import React from "react";
import './Diagrama.css';

const Diagrama = () => {
    return (
        <div className="di">
            <div className="question">
                Considerando o diagrama de classes abaixo, temos um objeto “List&lt;Casa&gt; casas” que pode conter N elementos. Exiba para o usuário o “Endereço”, “Metragem” e a quantidade de “Comodos” apenas das casas que possuam pelo menos 1 comodo com numero par de janelas.
            </div>
            <div className="rules">
                <ul>
                    Regras:
                    <li>
                        +Endereço : string
                        +Cor : string
                        +Metragem : int
                        +Comodos : List&lt;Comodo&gt;
                        Casa
                    </li>
                    <li>
                        +Nome : string
                        +Janelas : int
                        +Portas : int
                        Comodo
                    </li>
                    Considerações:
                    <li>
                        No “Endereço” já vem preenchido o numero do imóvel e o tipo de logradouro.
                    </li>
                    <li>
                        Exibir no seguinte formato: “Rua Castro Alves 550 – 10m² - 3 comodos.”
                    </li>
                </ul>
            </div>
            <div className="result">
                <h3>Resultado</h3>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Diagrama;