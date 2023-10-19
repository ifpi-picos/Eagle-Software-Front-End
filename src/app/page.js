import React from 'react';
import Image from 'next/image';
import "../app/components/css/telaInicial.css"

const Home = () => {
  return (
    <div className="body-inicial">
      <div className="wrapper">
        <header className="headerTitle">
          <div className="logo-inicial">
          <Image src="/logotipo-fotor.png" alt="" width={100} height={100} />
            <h2 className="h2-header">EAGLE'S SOFTWARE</h2>
          </div>
        </header>
        <section className="home-common">
          <div className="shape">
            <img className="shape1" src="/shape1.svg" alt="" />
            <img className="shape2" src="/shape1.svg" alt="" />
            <img className="shape3" src="/shape1.svg" alt="" />
            <img className="shape4" src="/shape1.svg" alt="" />
            <img className="shape5" src="/shape1.svg" alt="" />
          </div>
          <div className="content">
            <div className="text">
              <p>
                Bem-vindo(a) ao <span>EAGLE'S SOFTWARE</span>, encontre seus pertences perdidos em um piscar de olhos.
              </p>
              <a href="/login" className="btn">Continuar</a>
            </div>
            <div className="imgPage">
              <img className="img-page" src="/imagePage.png" alt="Logo da Página"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;