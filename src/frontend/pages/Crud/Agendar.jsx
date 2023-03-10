import React from 'react'
import Main from '../../components/template/Main/Main'
import './Agendar.css'
import  Create from '../../components/others/CRUD/CreateUser'

export default props =>
    <Main>
      <section className="container">
        <Create/>
      </section>
    </Main>