import React, { Component } from 'react'
import Main from '../../components/template/Main/Main'
import CabeloAPI from '../../components/others/API/CabeloAPI'
import DepilacaoAPI from '../../components/others/API/DepilacaoAPI'
import UnhasAPI from '../../components/others/API/UnhasAPI'

export default function Service() {
  return (
    <Main>
      <section>
        <CabeloAPI />
        <DepilacaoAPI />
        <UnhasAPI />
      </section>
    </Main>
  )

}