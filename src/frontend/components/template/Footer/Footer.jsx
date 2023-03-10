import React from "react";
import 'font-awesome/css/font-awesome.min.css'
import './Footer.css'
import logo from '../../../assets/img/logo-semFundo2.png'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


export default props =>
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-conosco">
        <h4>Oportunidades</h4>
        <p>Trabalhe Conosco</p>
        <p>Seja um Franqueado</p>
      </div>
      <div className="footer-info">
        <h4>Contatos</h4>
        <p>SAC - Ouvidoria</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: contato@empresa.com</p>
      </div>
      <div className="footer-social">
        <h4>Rede Fofinha's</h4>
        <ul>
          <li><a href="#"><BsFacebook /></a></li>
          <li><a href="#"><BsTwitter /></a></li>
          <li><a href="#"><BsInstagram /></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-direitos">
      <span>Fofinha's Hair &reg; Todos os Direitos Reservados</span>
      <span>Copyright &copy; 2023</span>
    </div>
  </footer>
