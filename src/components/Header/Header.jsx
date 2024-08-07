// src/components/Header/Header.jsx
import React from 'react';
import styles from './style.module.scss';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderNavBar/>
      </nav>
    </header>
  );
};

export default Header;
