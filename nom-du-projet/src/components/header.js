import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/photos/LOGO.jpg'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <div id="header">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        </div>
    </header>
  );
};

export default Header;