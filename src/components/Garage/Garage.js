import React, { useState, useEffect, useContext } from 'react';

import Cars from '../Cars/Cars';
import Card from '../UI/Card/Card';

import Img from '../UI/Img/Img';
import classes from './Garage.module.css';
import garageImage from '../../assets/Awesome-garage.jfif';
import CarsContext from '../../store/cars-context';
import Wrapper from '../UI/Wrapper/Wrapper';

import { db } from '../../firebase';
import { onValue, ref, get } from 'firebase/database';


const Garage = (props) => {
  const carsCtx = useContext(CarsContext);

  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          const user = Object.values(data).reduce((data, user) => {
            if (user.email === 'zaryooo@gmail.com') {
              data = user;
            } 
            return data;
          }, {});
          setUserData(user);
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

  const {cars, email, userId} = userData;


  return (
    <Wrapper>
      <Img src={garageImage} alt="Awesome garage" />
      <Card className={classes.garage}>
        <Cars cars={cars} userId={userId}/>
      </Card>
    </Wrapper>
  );
};

export default Garage;
