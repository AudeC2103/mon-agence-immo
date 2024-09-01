import React from 'react';
import canva from './../../assets/icones/canva.png';
import linkedIn from './../../assets/icones/linkedIn.png';
import instagram from './../../assets/icones/instagram.png';
import s from'./style.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftSection}>
          <a href="www.linkedin.com/in/aude-campillo-564598156" className={s.link}>
            <img src={linkedIn} className={s.icone} alt="Boutton Inscription"/>
          </a>
          <a href="https://www.canva.com/design/DAF0UiYLxzU/nGgkUvIYeuRg2xseM1kQDg/edit?utm_content=DAF0UiYLxzU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className={s.link}>
            <img src={canva} className={s.icone} alt="Boutton Inscription"/>
          </a>
          <a href="https://www.instagram.com/aude.campillo_immobilier?igsh=dzhtOXR3ZmV1azdq" className={s.link}>
            <img src={instagram} className={s.icone} alt="Boutton Inscription"/>
          </a>
        </div>
        <div className={s.centerSection}>
          <p>&copy; {new Date().getFullYear()} Mon Agence Immo. Tous droits réservés.</p>
        </div>
        <div className={s.rightSection}>
          <ul className={s.footerLinks}>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/l_agence">À propos de nous</a></li>
            <li><a href="/mentions_legales">Mentions Légales</a></li>
            <li><a href="/cguv">CGUV</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
