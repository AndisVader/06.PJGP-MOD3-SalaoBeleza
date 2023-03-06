import React from 'react'
import Main from '../../components/template/Main/Main'
import './Agenda.css'


export default props =>
    <Main>
      <section className="container">
        <form action="agenda" className='form-agenda'>
          <h1>Agende seu horário</h1>
          <label htmlFor="nome">Nome</label>
          <input type="text" />
          <label htmlFor="sobrenome">Sobrenome</label>
          <input type="text" />
          <label htmlFor="email">E-mail</label>
          <input type="email" />
          <label htmlFor="telefone">Telefone</label>
          <input type="number" />
          <label htmlFor="data">Data</label>
          <input type="date" />
          <label htmlFor="hora">Hora</label>
          <input type="time" />
          <button>Agendar</button>
        </form>
      </section>
    </Main>