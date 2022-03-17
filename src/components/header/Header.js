import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <nav className={styles.nav}>
          <NavLink to="/">Basic</NavLink>
          <NavLink to="social">Social</NavLink>
          <NavLink to="certificates">Certificates</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
