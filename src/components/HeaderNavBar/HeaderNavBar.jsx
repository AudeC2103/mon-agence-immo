// src/components/HeaderNavBar/HeaderNavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import logo from '../../assets/logo.png'; // Remplacez par le chemin de votre logo

const HeaderNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo de l'agence" />
        </Link>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li>
            <Link to="/properties">Biens à vendre</Link>
            <ul className={styles.subMenu}>
              <li><Link to="/properties/maison">Maison</Link></li>
              <li><Link to="/properties/appartement">Appartement</Link></li>
              <li><Link to="/properties/terrain">Terrain</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/advice">Conseils</Link>
            <ul className={styles.subMenu}>
              <li><Link to="/advice/achat">Achat</Link></li>
              <li><Link to="/advice/vente">Vente</Link></li>
            </ul>
          </li>
          <li><Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">L'agence</Link>
            <ul className={styles.subMenu}>
              <li><Link to="/about/mission">Mission</Link></li>
              <li><Link to="/about/services">Services</Link></li>
              <li><Link to="/about/team">L'équipe</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/about/success">Succès</Link>
            <ul className={styles.subMenu}>
              <li><Link to="/about/success/vendu">Vendu</Link></li>
              <li><Link to="/about/success/avis">Avis</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <Link to="/signup" className={styles.button}>Inscription</Link>
        <Link to="/login" className={styles.button}>Connexion</Link>
      </div>
    </header>
  );
};

export default HeaderNavBar;
