import React, { useContext, useState } from 'react';

import Login from '../Login/Login';
import Card from '../UI/Card/Card';
import Img from '../UI/Img/Img';
import Guest from './Guest';
import AddUser from '../Users/AddUser';

import AuthContext from '../../store/auth-context';

import classes from './Home.module.css';
import homeBackground from '../../assets/formula.jfif';

const Home = (props) => {
  const [isReg, setIsReg] = useState(false);

  const onFill = () => {
    setIsReg(true);
  }

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Img src={homeBackground} alt="Formula" className={classes['background-img']}/>
      <Card className={classes.home}>
        {ctx.isLogin && <Login />}
        {isReg && !ctx.isLogin && <Guest/>}
        {!isReg && !ctx.isLogin && <AddUser onFill={onFill}/>}
      </Card>
    </React.Fragment>
  );
};

export default Home;
