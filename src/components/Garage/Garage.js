import React, { useState, useEffect } from 'react';

import Cars from '../Cars/Cars';
import Card from '../UI/Card/Card';

import Img from '../UI/Img/Img';
import classes from './Garage.module.css';
import garageImage from '../../assets/Awesome-garage.jfif';
import Wrapper from '../UI/Wrapper/Wrapper';

import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';

const Garage = (props) => {
  const [userId, setUserId] = useState();
  const [cars, setCars] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    onValue(ref(db, 'users'), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const user = Object.values(data).find((data, user) => {
          if (user.email === 'test@test.bg') {
            data = user;
          }
          return data;
        });
        setUserId(user.userId);
        setCars(user.cars);
      }
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Card>
        <p>Loading...</p>
      </Card>
    );
  }

  if (httpError) {
    return (
      <Card>
        <p>{httpError}</p>
      </Card>
    );
  }

  const loadedCars = [];

  for (const car in cars) {
    loadedCars.push({
      carId: car,
      brand: cars[car].brand,
      series: cars[car].series,
      model: cars[car].model,
      year: cars[car].year,
      mileage: cars[car].mileage,
      engine: cars[car].engine,
      services: cars[car].services,
    });
  }

  return (
    <Wrapper>
      <Img src={garageImage} alt="Awesome garage" />
      <Card className={classes.garage}>
        <Cars cars={loadedCars} userId={userId} />
      </Card>
    </Wrapper>
  );
};

export default Garage;
