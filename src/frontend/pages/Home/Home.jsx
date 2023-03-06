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
      <h1 className='text2'>Seja bem vindo aos Fofinhas Hair. <br />
        Esse salão de beleza é feito para você que quer sair do padrão. Temos as melhores variações e estilos para seu corte de cabelo.
        Se diferencie, utilize cores vibrantes e se destaque nas multidões</h1>
      <GiHairStrands className='icon' />
      {/*aqui eu planejo deixar uma animação*/}
    </section>
    <section className='BotaoDeServico'>
      <h1 className='text3'> Venha conhecer nossos serviços</h1>
      <button><Link to="/Agenda">Agende seu horário!!</Link></button>
      <Lottie className='animacao' animationData={Girl} />
    </section>
    <section className='pictures'>
      <div className='uma'>
      <img src={menu} />
      </div>
      <div className='outrasduas'>
      <img src={menu2} />
      <img src={menu3} />
      </div>
      {/* serao 3 fotos que será cabelo, spa, tratamentos. preciso lembrar do background maneiro*/}
    </section>
    <section className='avaliacoes'>
      Venha nos visitar!
      <Lottie className='localizacao' animationData={Location} />
      <Lottie className='make' animationData={Make} />
    </section>
    <section className='local'>
      <MapPage />

      {/*visite nos nesse lugar*/}
    </section>
  </Main>
