import React from 'react';

import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>My Garage</h1>
      <Navigation showLogin={props.getLogin}/>
    </header>
  );
};

export default Header;
