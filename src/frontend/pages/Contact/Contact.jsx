import React from 'react'
import Main from '../../components/template/Main/Main'
import './Contact.css'


export default props =>
  <Main>
    <div className="container">
      <section className="info-box">
        <div className="info">
          <h2>CENTRAL DE ATENDIMENTO</h2>
          <details>
            <summary>TELEFONE:</summary>
            <p><i>0800 983 5400</i> - TERRITÓRIO NACIONAL
              <br />
              <i>(11) 3014-5594</i> - SP CAPITAL
              <br />
              <i>(21) 3405-9684</i> - RJ CAPITAL
              <br />
              <i>(21) 96473-5594</i> - CELULAR</p>
          </details>
          <h3>LOCALIZAÇÃO</h3>
          <details>
            <summary>FOFINHA'S HAIR</summary>
            <address>R. Vinte e Quatro de Maio, 543 - Riachuelo, Rio de Janeiro - RJ, 20950-090</address>
          </details>
          <h3>HORARIO COMERCIAL</h3>
          <p>Segunda a Sexta - 09:00 as 18:00
            <br />
            Sabado & Domingo - 09:00 as 14:00</p>
        </div>
      </section>
      <form className="cont-box">
        <h1>Fale Conosco</h1>
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