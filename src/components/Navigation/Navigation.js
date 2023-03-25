import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import styles from './navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        exact="true"
        activeclassname={styles.active}
        className={styles.authLink}
      >
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact="true"
          activeclassname={styles.active}
          className={styles.authLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
