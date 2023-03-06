import React from 'react';
import './Header.css'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

export default props =>
  <header className='header'>
    <Logo/>
    <Nav/>
  </header>
