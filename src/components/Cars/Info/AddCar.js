import React, {useEffect, useReducer, useState} from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';


import classes from './AddCar.module.css';

const inputReducer = (state, action) => {
  if (action.type === 'FILL_INPUT') {
    return { value: action.val, isValid: action.val !== '' };
  }
  return { value: '', isValid: false };
};

const AddCar = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [brandState, dispatchBrand] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [seriesState, dispatchSeries] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [mileageState, dispatchMileage] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [yearState, dispatchYear] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [engineState, dispatchEngine] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });
  const [modelState, dispatchModel] = useReducer(inputReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    setFormIsValid(
      brandState.isValid && yearState.isValid && mileageState.isValid
    );
  }, [brandState, yearState, mileageState]);

  const brandChangeHandler = (event) => {
    dispatchBrand({ type: 'FILL_INPUT', val: event.target.value });
  };

  const seriesChangeHandler = (event) => {
    dispatchSeries({ type: 'FILL_INPUT', val: event.target.value });
  };

  const mileageChangeHandler = (event) => {
    dispatchMileage({ type: 'FILL_INPUT', val: event.target.value });
  };
  const yearChangeHandler = (event) => {
    dispatchYear({ type: 'FILL_INPUT', val: event.target.value });
  };
  const engineChangeHandler = (event) => {
    dispatchEngine({ type: 'FILL_INPUT', val: event.target.value });
  };
  const modelChangeHandler = (event) => {
    dispatchModel({ type: 'FILL_INPUT', val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    
    const newCar = {
      brand: brandState.value,
      series: seriesState.value,
      model: modelState.value,
      year: yearState.value,
      engine: engineState.value,
      mileage: mileageState.value
    };

    props.onAdd(newCar);
    props.onClose();
    
  };

  return (
    <div className={classes['add-car']}>
        <form className={classes['add-car-form']} onSubmit={submitHandler}>
          <div className={classes.control}>
            <Input
              id="brand"
              label="Brand"
              type="text"
              isValid={brandState.isValid}
              value={brandState.value}
              onChange={brandChangeHandler}
              className={`${classes.input} ${classes['add-car-brand']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="series"
              label="Series"
              type="text"
              isValid={seriesState.isValid}
              value={seriesState.value}
              onChange={seriesChangeHandler}
              className={`${classes.input} ${classes['add-car-series']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="model"
              label="Model"
              type="text"
              isValid={modelState.isValid}
              value={modelState.value}
              onChange={modelChangeHandler}
              className={`${classes.input} ${classes['add-car-model']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="year"
              label="Year"
              type="number"
              isValid={yearState.isValid}
              value={yearState.value}
              onChange={yearChangeHandler}
              className={`${classes.input} ${classes['add-car-year']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="engine"
              label="Engine"
              type="text"
              isValid={engineState.isValid}
              value={engineState.value}
              onChange={engineChangeHandler}
              className={`${classes.input} ${classes['add-car-engine']}`}
            />
          </div>
          <div className={classes.control}>
            <Input
              id="mileage"
              label="Mileage"
              type="number"
              isValid={mileageState.isValid}
              value={mileageState.value}
              onChange={mileageChangeHandler}
              className={`${classes.input} ${classes['service-mileage']}`}
            />
          </div>
          <div className={`${classes.actions} ${classes['add-button']}`}>
            <Button type="submit" disabled={!formIsValid} className={classes.btn}>
              Add Car
            </Button>
          </div>
        </form>
    </div>
  );
};

export default AddCar;
