import React, { useState } from 'react';

import Wrapper from '../UI/Wrapper/Wrapper';
import CarInfo from './Info/CarInfo';
import CarServices from './Book/CarServices';

import classes from './Cars.module.css';
import AddCar from './Info/AddCar';

import { db } from '../../firebase';
import { uid } from 'uid';
import { set, ref } from 'firebase/database';

const Cars = (props) => {
  const [addCarForm, setAddCarForm] = useState(false);
  const [loadCarInfo, setLoadCarInfo] = useState('7c3efb69fd9');

  const onPickedCar = (event) => {
    setLoadCarInfo(event.target.dataset.id);
    setAddCarForm(false);
  };

  const listCars = props.cars.map((car) => {
    return (
      <li key={car.carId}>
        <button onClick={onPickedCar} data-id={car.carId}>
          {car.brand} {car.series}
        </button>
      </li>
    );
  });

  const onClickAddCar = () => {
    setAddCarForm(true);
  };

  const onAddCarHandler = (car) => {
    const carId = uid();
    set(ref(db, `/users/${props.userId}/cars/${carId}`), {
      carId: carId,
      brand: car.brand,
      model: car.model,
      series: car.series,
      year: car.year,
      engine: car.engine,
      mileage: car.mileage,
      services: [],
    });
  };

  const onCloseHandler = () => {
    setAddCarForm(false);
  };

  return (
    <Wrapper>
      <div className={classes['cars-list']}>
        <ul>
          {listCars}
          <li>
            <button onClick={onClickAddCar}>Add Car</button>
          </li>
        </ul>
      </div>
      <div className={classes['car-info']}>
        {!addCarForm && (
          <CarInfo
            cars={props.cars}
            loadCarId={loadCarInfo}
            userId={props.userId}
          />
        )}
        {!addCarForm && (
          <CarServices
            cars={props.cars}
            carId={loadCarInfo}
            userId={props.userId}
          />
        )}
        {addCarForm && (
          <AddCar onAdd={onAddCarHandler} onClose={onCloseHandler} />
        )}
      </div>
    </Wrapper>
  );
};

export default Cars;
