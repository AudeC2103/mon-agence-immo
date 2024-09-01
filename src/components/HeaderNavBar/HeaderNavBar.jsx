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
              <li><Link to="/biens_a_vendre/tous">Tous</Link></li>
              <li><Link to="/biens_a_vendre/maisons">Maisons</Link></li>
              <li><Link to="/biens_a_vendre/appartements">Appartements</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/conseils" aria-haspopup="true">Conseils</Link>
            <ul className={s.subMenu}>
              <li><Link to="conseils/tous">Tous</Link></li>
              <li><Link to="conseils/faq">FAQ</Link></li>
              <li><Link to="conseils/conseils">Conseils</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/l_agence" aria-haspopup="true">L'agence</Link>
            <ul className={s.subMenu}>
              <li><Link to="/l_agence/tout_savoir">Tout savoir</Link></li>
              <li><Link to="/l_agence/services">Services</Link></li>
              <li><Link to="/l_agence/mission">Mission</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/success">Succès</Link>
          </li>
          <li> 
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavBar;
