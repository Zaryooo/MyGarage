import React from 'react';

import classes from './CarInfo.module.css';

const CarInfo = (props) => {
  const pickedCar = props.cars.filter((car) => car.carId === props.loadCarId);

  // const onAddHandler = (service) => {
  //   const getServices = pickedCar.map((car) => {
  //     return car.services;
  //   });
  //   getServices[0].push(service);
  //   props.editCar(pickedCar);
  // };

  const infoCar = pickedCar.map((car) => {
    return (
      <div key={car.carId} className={classes['car-info-list']}>
        <ul>
          <li>
            brand:<p>{car.brand}</p>
          </li>
          <li>
            series:<p>{car.series}</p>
          </li>
          <li>
            model:<p>{car.model}</p>
          </li>
          <li>
            year:<p>{car.year}</p>
          </li>
          <li>
            engine:<p>{car.engine}</p>
          </li>
          <li>
            mileage:<p>{car.mileage}</p>
          </li>
        </ul>
      </div>
    );
  });

  

  return (
    <React.Fragment>
      {infoCar}
      
    </React.Fragment>
  );
};

export default CarInfo;
