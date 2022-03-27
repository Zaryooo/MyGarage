import React from "react";

const CarsContext = React.createContext({
    cars: [],
    addCar: () => {},
    updateCar: () => {},
    removeCar: () => {}
});


export default CarsContext;
