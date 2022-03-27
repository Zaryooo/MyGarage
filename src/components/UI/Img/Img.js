import React from 'react';

import classes from './Img.module.css';

const Img = (props) => {
  return (
    <div className={classes.background}>
      <img src={props.src} alt={props.alt} className={`${classes['background-img']} ${props.className}`} />
    </div>
  );
};

export default Img;
