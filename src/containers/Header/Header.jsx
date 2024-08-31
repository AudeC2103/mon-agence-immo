// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import logo from './../../assets/logo2.png';
import userLogin from './../../assets/icones/userLogin.png';
import addUser from './../../assets/icones/addUser.png'

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
          <div className={s.authSignUp}>
            <Link to="/inscription" className={s.signUpBtn}>
              Inscription
            </Link>
            <Link to="/inscription" className={s.signUpImg}>
          
              <img src={userLogin} className={s.signUpImg}alt="Boutton Inscription"/>
            </Link>
          </div>
          <div className={s.authLogin}>
            <Link to="/connexion" className={s.loginBtn}>
              Connexion
            </Link> 
            <Link to="/connexion" className={s.loginImg}> 
              <img src={addUser} className={s.loginImg} alt="Boutton Connexion"/>
            </Link>    
          </div>
          </div>
      </header>
    </div>
  );
};

export default Header;
