import React, {useState, useEffect} from "react";
import './Diagrama.css';
import diagram from '../images/diagram.png';
import axios from 'axios';

const Diagrama = () => {
    const [birds, setGetBirds] = useState([]);

    useEffect(() => {
        async function fetchBirds() {
            const URL = `https://audubon-society-api.herokuapp.com/birds`
            try {
               const res = await axios.get(URL)
               console.log(res.data, 'Aqui')
               setGetBirds(res.data)
            } catch (error) {
               console.log(error)
            }
        }
        fetchBirds();
    }, []);
    
    if (!birds) return <h3>Loading...</h3>

    return (
        <div className="di">
            <div className="question">
                <p>3 - Considerando o diagrama de classes abaixo, temos um objeto “List&lt;Casa&gt; casas” que pode conter N elementos. Exiba para o usuário o “Endereço”, “Metragem” e a quantidade de “Comodos” apenas das casas que possuam pelo menos 1 comodo com numero par de janelas.</p>
            </div>
            <div className="rules">
                <ul>
                    Regras:
                    <li>
                        <img src={diagram} alt='diagrama'></img>
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
                <label>
                    <select className="select">
                        <option>Escolha sua casa</option>
                        {birds.map((item, index) => 
                            <option key={index}>{item.name}</option>
                            // <img src={item.image} alt={index}></img>
                        )}
                    </select>
                </label><br></br>
                { }
                <div>
                    <p>Pendente!!</p>
                </div>
            </div>
            <hr></hr><br></br>
        </div>
    );
}

export default Diagrama;