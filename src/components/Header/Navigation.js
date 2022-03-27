import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {ctx.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Cars</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        </ul>
      )}
      {!ctx.isLoggedIn && (
        <ul>
          <li>
            <a href="/">Register</a>
          </li>
          <li>
          <button onClick={ctx.loginBtn}>Login</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
