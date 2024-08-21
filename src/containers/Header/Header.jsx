// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.logo}>
          <Link to="/">
            <img src={logo} alt="Logo de l'agence" />
          </Link>
        </div>
        <nav className={s.nav} alt="Barre de Navigation">
          <HeaderNavBar/>
        </nav>
        <div className={s.auth}>
          <Link to="/inscription" className={s.signUpBtn} alt="Boutton Inscription">Inscription</Link>
          <Link to="/connexion" className={s.loginBtn} alt="Boutton Connexion">Connexion</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
