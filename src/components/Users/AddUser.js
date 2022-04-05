import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Wrapper from '../UI/Wrapper/Wrapper';

import classes from './AddUser.module.css';

import { db } from '../../firebase';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

const AddUser = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [isFormValid, setIsFormValid] = useState(false);

  const onChangeHandler = (e) => {
    setUserEmail(e.target.value);
    if (e.target.value.includes('@')) {
      setEmailIsValid(true);
      setIsFormValid(true);
    } else {
      setEmailIsValid(false);
      setIsFormValid(false);
    }
  };

  const onAddHandler = () => {
    const userId = uid();
    set(ref(db, 'users/' + userId), {
      userId: userId,
      email: userEmail,
      cars: [], 
    });

    setUserEmail('');
    props.onFill();
  };

  return (
    <Wrapper>
      <Card className={classes.registration}>
        <Input
          id="email"
          label="Email"
          type="text"
          value={userEmail}
          isValid={emailIsValid}
          onChange={onChangeHandler}
        />
        <div className={classes.actions}>
          <Button
            type="submit"
            onClick={onAddHandler}
            className={classes.btn}
            disabled={!isFormValid}
          >
            Register
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
