import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className='logo'>
          <img src='' alt=''></img>
        </div>
        <input></input>
        <div className='btn'>
          <div className='icon-user'>user</div>
          <div className='icon-cart'>Cart</div>
        </div>
      </header>

      {/* menu */}
      <menu className='menu'>
        <a href='##'>perfume infantil</a>
        <a href='##'>sabonetes</a>
        <a href='##'>pós-banho</a>
        <a href='##'>assaduras</a>
        <a href='##'>hidratantes</a>
        <a href='##'>lenços umedecidos</a>
      </menu>

      {/* carousel */}
      <section className='carousel'>
        <img src='https://png.pngtree.com/background/20210710/original/pngtree-blue-striped-cartoon-candy-mother-and-baby-promotion-banner-picture-image_1017537.jpg' alt=''></img>
      </section>

      {/* conteudo */}
      <main className='content'>
        <h1>forever baby destaques</h1>
        <div className='card'>
          <img src='https://png.pngtree.com/background/20210710/original/pngtree-blue-striped-cartoon-candy-mother-and-baby-promotion-banner-picture-image_1017537.jpg' alt=''></img>
          <p>titulo</p>
          <p>preço</p>
          <p>avaliação</p>
          <button>button</button>
        </div>
        <h1>forever baby destaques</h1>
        <div className='card'>
          <img src='https://png.pngtree.com/background/20210710/original/pngtree-blue-striped-cartoon-candy-mother-and-baby-promotion-banner-picture-image_1017537.jpg' alt=''></img>
          <p>titulo</p>
          <p>preço</p>
          <p>avaliação</p>
          <button>button</button>
        </div>
        <footer>
          <div className='newsletter'>
            <h2>newsletter forever baby</h2>
            <p>Cadastre-se agora para não peder nenhuma promoção</p>
            <input></input>
          </div>
          <div className='sociais'>
            <h2>visite nossas redes sociais</h2>
            <div className='icons-sociais'>
              <a href='##'>i</a>
              <a href='##'>f</a>
              <a href='##'>y</a>
              <a href='##'>t</a>
            </div>
            <div className='extra-menu'>
              <a href='##'>perfume infantil</a>
              <a href='##'>sabonetes</a>
              <a href='##'>pós-banho</a>
              <a href='##'>assaduras</a>
              <a href='##'>hidratantes</a>
              <a href='##'>lenços umedecidos</a>
            </div>
            <h2>formas de pagamento</h2>
            <img src='https://cafeland.com.br/img/cms/logo%20pagamento.jpg' alt=''></img>
          </div>
          <div>
            <p>2021 www.foreverliss.com.br</p>
            <p>Todos os direitos reservados.</p>
            <p>Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque sujeitos a alterações e podem variar sem aviso prévio. Em caso de divergência no valor do produto, irá prevalecer sempre o valor do carrinho de compras.</p>
            <p>FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112</p>
            <p>2022 www.foreverliss.com.br</p>
            <p>Todos os direitos reservados.</p>
            <p>Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque sujeitos a alterações e podem variar sem aviso prévio. Em caso de divergência no valor do produto, irá prevalecer sempre o valor do carrinho de compras.</p>
            <p>FOREVER COMPANY COSMETICOS LTDA / www.foreverliss.com.br / Rua José Bonifácio, N° 690 Lençóis Paulista - SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual: 416.118.979.112</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
