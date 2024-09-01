import React from 'react';
import s from './style.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftSection}>
          <p>&copy; {new Date().getFullYear()} Mon Agence Immo. Tous droits réservés.</p>
        </div>
        <div className={s.rightSection}>
          <ul className={s.footerLinks}>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/">À propos</a></li>
            <li><a href="/mentions_legales">Mentions Légales</a></li>
            <li><a href="/cguv">CGUV</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
