import React from 'react'
import Main from '../../components/template/Main/Main'
import { Link } from 'react-router-dom'
import './Home.css'
import Banner from './Banner'
import { GiHairStrands } from 'react-icons/gi'
import menu from '../../assets/img/menu.jpg'
import menu2 from '../../assets/img/menu2.jpg'
import menu3 from '../../assets/img/menu3.jpg'
import MapPage from '../Map/MapPage'
import Girl from '../Lottie/girl.json'
import Lottie from 'lottie-react'
import Location from '../Lottie/location3.json'
import Make from '../Lottie/make.json'

export default props =>
  <Main>
    <Banner />
    <section className='aboutUs'>
      <div className="vasco">
        <h1 className='text2'>Seja bem vindo ao salão Fofinha's Hair. <br />
          O Conceito do Fofinha's Hair é te transoformar em ÚNICA. Nossa fórmula secreta é ser fora do comum dos outros salões de beleza, temos a autenticidade e o comprometimento para te fazer sentir especial.
          Saia desse padrão nesse mundo repetitivo, se destaque dos demais com sua beleza, seja feliz e sem medo. </h1>
      </div>
      <Lottie className='animacao' animationData={Girl} />

    </section>
    <section className='BotaoDeServico'>
      <div className="third">
        <h1 className='text3'>Seja criativo, saia da zona de conforto, experimente coisas novas, novos cortes, novas cores.
          realizamos cortes exclusivos, diversos serviços de estética e embelezamento. Profissionais de alto nível estarão para te atender, conheça os serviços. </h1>
      </div>
      <button className='butao'><Link to="/Agenda">Agende seu horário conosco!!</Link></button>

      <Lottie className='make' animationData={Make} />

    </section>
    <section className='pictures'>
      <div className="cortes">
        <div className="flamengo">
        <h1 className="cortesh"> Serviços prestados em nosso salão!</h1>
        </div>
        <GiHairStrands className='icon' />

      </div>
      <div className='images'>
        <img src={menu} />
        <img src={menu2} />
        <img src={menu3} />
      </div>
    </section>
    <section className='orientac'>
    <Lottie className='localizacao' animationData={Location} />
      <h1>Venha nos visitar!
      <br />
      <br />
      A Fofinha's Hair está localizado no Senac Centro Politécnico Riachuelo, 
      <br />sala 201. </h1>
      <br />
    </section>
    <section className='local'>
      <MapPage />

      {/*visite nos nesse lugar*/}
    </section>
  </Main>