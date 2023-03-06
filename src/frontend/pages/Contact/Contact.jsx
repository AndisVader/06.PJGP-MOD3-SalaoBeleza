import React from 'react'
import Main from '../../components/template/Main/Main'
import './Contact.css'

export default props =>
  <Main>
    <div className="container">
      <section className="info-box">
        <div className="info">
          <h2>Ligue para nós</h2>
          <address>Telefone: (11) 1234-5678</address>
          <h2>Localização</h2>
          <p>Senac Politecnico</p>
          <h2>Horário comercial</h2>
          <address>Ter - Qui ... 10h - 20h</address>
          <address>Sex - Sab ... 10h - 15h</address>
        </div>
      </section>
      <form className="cont-box">
        <h1>Contatos</h1>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </Main>