import React from 'react';

import Wrapper from '../UI/Wrapper/Wrapper';
import classes from './Guest.module.css';

const Guest = () => {
  return (
    <Wrapper>
      <div className={classes.header}>
        <h1 id="title" className={`${classes.title} ${classes['title-top']}`}>
          Guests
        </h1>
      </div>
    </Wrapper>
  );
};

export default Guest;
