import React from 'react';

import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>My Garage</h1>
      <Navigation/>
    </header>
  );
};

export default Header;
