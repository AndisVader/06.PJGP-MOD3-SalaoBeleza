import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";
import BtnMobile from "./BtnMobile"


export default props =>
  <div>
    <BtnMobile/>
    <nav className='navbar'>
      <ul>
        <Link to="/" className="active">Início</Link>
        <Link to="/SobreNos">Sobre Nós</Link>
        <Link to="/Servicos">Serviços</Link>
        <Link to="/Contatos">Contatos</Link>
      </ul>
    </nav>
  </div>
