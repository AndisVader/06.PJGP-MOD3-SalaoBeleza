import React from "react";
import 'font-awesome/css/font-awesome.min.css'
import './Footer.css'
import logo from '../../../assets/img/logo-semFundo2.png'

export default props =>
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-conosco">
        <h4>Nossas Oportunidades</h4>
        <p>Trabalhe Conosco</p>
        <p>Seja um Franqueado</p>
      </div>
      <div className="footer-info">
        <h4>Nossos Contatos</h4>
        <p>Contato</p>
        <p>SAC - Ouvidoria</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: contato@empresa.com</p>
      </div>
      <div className="footer-social">
        <h4>Fofinhas na Rede</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-direitos">
      <span>Fofinha's Hair &reg; Todos os Direitos Reservados</span>
      <span>Copyright &copy; 2023</span>
    </div>
  </footer>
