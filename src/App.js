import React from 'react';

import './GlobalStyles.css';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import dadosIniciais from './Data/dados_iniciais.json';  

function App() {
  return (
    <> 
    <Menu />

    <BannerMain 
    videotitle={dadosIniciais.categorias[0].videos[0].titulo}
    url={dadosIniciais.categorias[0].videos[0].url}
    videoDescription={"Papo com o abestado!"}
    />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />

    <Carousel
      category={dadosIniciais.categorias[1]}
    />

    <Carousel
      category={dadosIniciais.categorias[2]}
    />      

    <Carousel
      category={dadosIniciais.categorias[3]}
    />      

    <Carousel
      category={dadosIniciais.categorias[4]}
    />      

    <Carousel
      category={dadosIniciais.categorias[5]}
    />      

    <Footer />
  </>
  );
}

export default App;
