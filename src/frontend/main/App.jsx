import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'


import Header from '../components/template/Header/Header'
import Rotas from '../routes/Routes'
import Footer from '../components/template/Footer/Footer'

export default props =>
  <div className="grid-container">
    <BrowserRouter>
        <Header />
        <Rotas />
        <Footer />  
    </BrowserRouter>
  </div>