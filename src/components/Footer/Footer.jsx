import React from 'react';
import styles from './style.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <p>&copy; {new Date().getFullYear()} Mon Agence Immo. Tous droits réservés.</p>
        </div>
        <div className={styles.rightSection}>
          <ul className={styles.footerLinks}>
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
