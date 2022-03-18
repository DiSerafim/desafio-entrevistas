import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import { useNavigate } from 'react-router-dom';

import iconinsta from './images/icon-i.png';
import iconface from './images/icon-f.png';
import iconyou from './images/icon-y.png';
import icontic from './images/icon-t.png';
import cart from './images/cart.svg';
import cards from './images/pagamentos-bandeiras-01.png';
import user from './images/user.svg';
import './App.css';

function App() {
  const { setUserSearch } = useState('');
  const [input, setInput] = useState({ search: '' });
  const [isDisabled, setIsDisabled] = useState(true);
  // const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleClick() {
    setUserSearch(input.search);
    localStorage.setItem('user', JSON.stringify({ search: input.search }));
    // navigate.push('/');
  }

  useEffect(() => {
    // const re = '[a-zA-Z0-9]';
    const minInputLength = 3;
    const { search } = input;

    if (search.length >= minInputLength) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
    
  }, [input]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div>
      {/* topo */}
      <header>
        {/* logo */}
        <a href='/'>
          <svg width="160" height="86" viewBox="0 0 160 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="85.5445" fill="url(#pattern0)"/>
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_3_4" transform="scale(0.00330033 0.00617284)"/>
              </pattern>
              <image id="image0_3_4" width="303" height="162" xlinkHref="data:image/png;base64,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" />
            </defs>
          </svg>
        </a>
        <form>
          <input
            class="search"
            pattern="^[a-zA-Z0-9]+$"
            id="search"
            name="search"
            onChange={ handleChange }
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            required="required"
            type="search"
          />
          <input
            class="button"
            disabled= { isDisabled }
            onClick={ handleClick }
            value="BUSCAR"
            type="submit"
          />
        </form>
        <div class='btn'>
          <a href='/' class='icon-user'>
            <img src={user} alt="icon user" />
          </a>
          <a href='/' class='icon-cart'>
            <img src={cart} alt="shopping cart" />
          </a>
          <a href='/'>
            <p class="icon-text-user">MINHA CONTA</p>
          </a>
          <a href='/'>
            <p class="icon-text-cart">CARRINHO</p>
          </a>
        </div>
      </header>

      {/* menu */}
      <menu>
        <li><a href='/'>perfume infantil</a></li>
        <li><a href='/'>sabonetes</a></li>
        <li><a href='/'>pós-banho</a></li>
        <li><a href='/'>assaduras</a></li>
        <li><a href='/'>hidratantes</a></li>
        <li><a href='/'>lenços umedecidos</a></li>
      </menu>

      {/* carousel */}
      <section class='carousel'>
        <Slider {...settings} className="slider">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Slider>
      </section>

      {/* conteudo */}
      <main>
        <h1>forever baby <span>destaques</span></h1>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        
        <h1>forever baby <span>destaques</span></h1>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
        <div class='card'>
          <a href='/'>
            <div class="image-card"></div>
          </a>
          <a href='/'>
            <p class="title">Lorem ipsum lorem ipsum</p>
          </a>
          <p class="price">R$ 99,99</p>
          <p class="rating">⭐ ⭐ ⭐ ⭐ ⭐</p>
          <button>
            <img src={cart} alt="shopping cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
      </main>
        
      <footer>
        {/* newsletter */}
        <div class='newsletter'>
          <h2>newsletter forever baby</h2>
          <p>Cadastre-se agora para não peder nenhuma promoção</p>
          <form>
            <input type="submit" value="CADASTRAR" class="btn" />
            <input type="search" id="gpush" name="gpush" placeholder="Digite aqui o seu melhor e-mail" />
          </form>
        </div>

        {/* midias sociais */}
        <div class='sociais'>
          <h2>visite nossas redes sociais</h2>
          <div class='icons-sociais'>
              <a href='https://www.instagram.com/foreverliss' target="blank" placeholder="Instagran">
                <img src={iconinsta} alt='icone instagran' />
              </a>
              <a href='https://www.facebook.com/foreverliss' target="blank" placeholder="Facebook">
                <img src={iconface} alt='icone facebook' />
              </a>
              <a href='https://www.youtube.com/ForeverLissOficial' target="blank" placeholder="Youtube">
                <img src={iconyou} alt='icone youtube' />
              </a>
              <a href='https://www.tiktok.com/@foreverlissprofessional' target="blank" placeholder="Tik-tok">
                <img src={icontic} alt='icone tik-tok' />
              </a>
          </div>
          <div class='extra-menu'>
              <a href='/'>perfume infantil</a>
              <a href='/'>sabonetes</a>
              <a href='/'>pós-banho</a>
              <a href='/'>assaduras</a>
              <a href='/'>hidratantes</a>
              <a href='/'>lenços umedecidos</a>
          </div>
          <h2>formas de pagamento</h2>
          <img src={cards} class="cards" alt='cartões bandeiras' />
        </div>

        {/* informações extras */}
        <div class="info">
          <div class="topo">
            <p>2022 <a href='https://www.foreverliss.com.br/' target="blanck">www.foreverliss.com.br</a></p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div class="bottom">
            <p>Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque sujeitos a alterações e podem variar sem aviso prévio. Em caso de divergência no valor do produto, irá prevalecer sempre o valor do carrinho de compras.</p>
            <p>FOREVER COMPANY COSMETICOS LTDA / <a href='https://www.foreverliss.com.br/' target="blanck">www.foreverliss.com.br</a> / Rua José Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
