import React from 'react';

import Img from '../UI/Img/Img';
import Header from './Header';

import classes from './Layout.module.css';
import homeBackground from '../../assets/formula.jfif';


const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Img
        src={homeBackground}
        alt="Formula"
        className={classes['background-img']}
      />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
