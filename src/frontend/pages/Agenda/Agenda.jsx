import React from 'react'
import Main from '../../components/template/Main/Main'
import './Agenda.css'
import  PutUser from '../../components/others/API/CreateUser'


export default props =>
    <Main>
      <section className="container">
        <PutUser/>
      </section>
    </Main>