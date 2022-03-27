import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import NewService from './NewService';
import classes from './CarServices.module.css';

const CarServices = (props) => {
  const [showAddForm, setShowAddForm] = useState();

  const pickedCar = props.cars.filter((car) => car.carId === props.carId);

  const services = [];
  const carService = pickedCar.reduce((service, car) => {
    if (car.services !== 'none') {
      return car.services;
    }
  }, {});
  for (const service in carService) {
    services.push({
      id: service,
      service: carService[service].service,
      mileage: carService[service].mileage,
      date: carService[service].date,
      info: carService[service].info,
    });
  }

  const carServices = services.map((service, pos) => {
    return (
      <div key={pos} className={classes['car-services-list']}>
        <ul>
          <li>
            service: <p>{service.service}</p>
          </li>
          <li>
            date: <p>{service.date}</p>
          </li>
          <li>
            mileage: <p>{service.mileage} km</p>
          </li>
          <li>
            info: <p>{service.info}</p>
          </li>
        </ul>
      </div>
    );
  });

  const addNewService = (service) => {
    setShowAddForm(false);
  };

  const onClickAdd = () => {
    setShowAddForm(true);
  };

  return (
    <div className={classes['car-services']}>
      <div className={classes['car-services-box']}>{carServices}</div>
      {showAddForm && (
        <NewService
          carNewService={addNewService}
          carId={props.carId}
          userId={props.userId}
        />
      )}
      {!showAddForm && (
        <Button className={classes['button-add']} onClick={onClickAdd}>
          Add New Service
        </Button>
      )}
    </div>
  );
};

export default CarServices;
