import React, { useState, useRef, useEffect, useReducer } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import { db } from '../../../firebase';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

import classes from './NewService.module.css';

const inputReducer = (state, action) => {
  if (action.type === 'FILL_INPUT') {
    return { value: action.val, isValid: action.val !== '' };
  }
  return { value: '', isValid: false };
};

const NewService = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const infoService = useRef(null);

  const [nameState, dispatchName] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [dateState, dispatchDate] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [mileageState, dispatchMileage] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    setFormIsValid(
      nameState.isValid && dateState.isValid && mileageState.isValid
    );
  }, [nameState, dateState, mileageState]);

  const serviceChangeHandler = (event) => {
    dispatchName({ type: 'FILL_INPUT', val: event.target.value });
  };

  const dateChangeHandler = (event) => {
    dispatchDate({ type: 'FILL_INPUT', val: event.target.value });
  };

  const mileageChangeHandler = (event) => {
    dispatchMileage({ type: 'FILL_INPUT', val: event.target.value });
  };


  const submitHandler = (event) => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    const info =
      infoService.current.value.trim() === 0 ? '---' : infoService.current.value;
    const [year, month, day] = dateState.value.split('-');
    const date = `${day}-${month}-${year}`;

    const serviceId = uid();
    set(ref(db, `/${props.userId}/cars/${props.carId}/services/${serviceId}`), {
      serviceId: serviceId,
      service: nameState.value,
      mileage: mileageState.value,
      date: date,
      info: info,

    });
   
    props.carNewService();
  };

  return (
    <div className={classes['new-service']}>
      <div className={classes['service-form']}>
        <form onSubmit={submitHandler}>
          <Input
            id="service"
            label="Service"
            type="text"
            isValid={nameState.isValid}
            value={nameState.value}
            onChange={serviceChangeHandler}
            className={`${classes.control} ${classes['service-name']}`}
          />
          <div className={classes['service-date-box']}>
            <Input
              id="date"
              label="Date"
              type="date"
              isValid={dateState.isValid}
              value={dateState.value}
              onChange={dateChangeHandler}
              className={`${classes.control} ${classes['service-date']}`}
            />
            <Input
              id="mileage"
              label="Mileage"
              type="number"
              isValid={mileageState.isValid}
              value={mileageState.value}
              onChange={mileageChangeHandler}
              className={`${classes.control} ${classes['service-mileage']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="info"
              label="Info"
              type="text"
              ref={infoService}
              className={`${classes.control} ${classes['service-mileage']}`}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
            >
              Add Service
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewService;
