import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo-semFundo.png'

export default props => 
  <div className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </div>