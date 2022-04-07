import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {ctx.isLoggedIn && (
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={ctx.onLogout}
              className={`${classes.button} ${(navData) => (navData.isActive ? 'active' : '')}`}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      )}
      {!ctx.isLoggedIn && (
        <ul>
          <li>
            <NavLink
              to="/account"
              className={`${classes.button} ${(navData) => (navData.isActive ? 'active' : '')}`}
            >
              Account
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
