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
            <br />
            <summary>TELEFONE:</summary>
            <p><i>0800 983 5400</i> - <bold>TERRITÓRIO NACIONAL</bold></p>
            <p><i>(11) 3014-5594</i> - <bold>SP CAPITAL</bold></p>
            <p><i>(21) 3405-9684</i> - <bold>RJ CAPITAL</bold></p>
            <p><i>(21) 96473-5594</i> - <bold>CELULAR</bold></p>
          </details>
          <br />
          <h2>LOCALIZAÇÃO</h2>
          <details>
            <br />
            <summary>FOFINHA'S HAIR</summary>
            <address>R. Vinte e Quatro de Maio, 543 - Riachuelo, Rio de Janeiro - RJ, 20950-090</address>
          </details>
          <br />
          <h2>HORARIO COMERCIAL</h2>
          <br />
          <p>Segunda a Sexta - 09:00 as 18:00</p>
          <p>Sabado & Domingo - 09:00 as 14:00</p>
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