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
            <li><a href="/about">À propos</a></li>
            <li><a href="/privacy">Confidentialité</a></li>
            <li><a href="/terms">Conditions d'utilisation</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
