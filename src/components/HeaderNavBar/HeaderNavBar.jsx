import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const HeaderNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={s.header}>
      <button className={s.menuToggle} onClick={toggleMenu} aria-label="Toggle navigation menu">
        ☰
      </button>
      <div className={`${s.nav} ${menuOpen ? s.open : ''}`}>
        <ul className={s.navList}>
          <li>
            <Link to="/biens_a_vendre" aria-haspopup="true">Biens à vendre</Link>
            <ul className={s.subMenu}>
              <li><Link to="/biens_a_vendre/maisons">Maison</Link></li>
              <li><Link to="/biens_a_vendre/appartements">Appartement</Link></li>
              <li><Link to="/biens_a_vendre/terrains">Terrain</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/conseils" aria-haspopup="true">Conseils</Link>
            <ul className={s.subMenu}>
              <li><Link to="/conseils/achat">Achat</Link></li>
              <li><Link to="/conseils/vente">Vente</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/l_agence" aria-haspopup="true">L'agence</Link>
            <ul className={s.subMenu}>
              <li><Link to="/l_agence/mission">Mission</Link></li>
              <li><Link to="/l_agence/services">Services</Link></li>
              <li><Link to="/l_agence/les_conseillers">L'équipe</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/success" aria-haspopup="true">Succès</Link>
            <ul className={s.subMenu}>
              <li><Link to="/success/nos_ventes">Vendu</Link></li>
              <li><Link to="/success/avis">Avis</Link></li>
            </ul>
          </li>
          <li> 
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={s.faq} to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavBar;
