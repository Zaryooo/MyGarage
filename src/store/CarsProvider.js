import React, {useState, useReducer} from 'react';
import CarsContext from './cars-context';

const defaultCarsState = {
    cars: []
}

const carsReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updateCars = state.cars.concat(action.car);
        return {
            cars: updateCars
        }
    }
    return defaultCarsState;
}

const CarsProvider = props => {

    const [carsState, dispatchCarsState] = useReducer(carsReducer, defaultCarsState);

    const addAllCarsHandler = (car) => {
    }

    const addCarHandler = (car) => {
        console.log(car);
        dispatchCarsState({type: 'ADD', car: car});
    }

    const updateCarHandler = (car) => {}

    const removeCarHandler = (car) => {}

    const carsContext = {
        cars: carsState.cars,
        addAllCars: addAllCarsHandler,
        addCar: addCarHandler,
        updateCar: updateCarHandler,
        removeCar: removeCarHandler
    }

    return <CarsContext.Provider value={carsContext}>
        {props.children}
    </CarsContext.Provider>
}

export default CarsProvider;