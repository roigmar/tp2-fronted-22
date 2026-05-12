import React from 'react'
import logo from '../assets/logo-BAM.png'  
import './Header.css'

const Header = () => {
  return (
    <header className="index-header">
      <nav className="index-nav">
        <a href="/">
          <img src={logo} alt="Logo BAM" className="index-logo" />  
        </a>
        <ul className="index-nav-list">
          <li><a href="/">Portada</a></li>
          <li><a href="#">Bitácora</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
