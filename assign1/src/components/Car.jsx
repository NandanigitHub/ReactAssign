import React from "react";
const Cardata = (props) => {
  const { car } = props;
  return (
    <div>
      <ul>
        <div>CAR DETAILS</div>
          <li>model: {car.model}</li>
          <li>company: {car.company}</li>
          <li>price: {car.price}L</li>
        <li>configuration</li>
        <ul>
          <li>color: {car.configuration.color}</li>
          <li>fuel: {car.configuration.fuel}</li>
          <li>cylinder: {car.configuration.cylinder}</li>
          <li>fuelTankCapacity: {car.configuration.fuelTankCapacity}</li>
        </ul>
        <li>MileAge</li>
        <ul>
          <li>city: {car.configuration.mileage.city}</li>
          <li>highway:{car.configuration.mileage.highway}</li>
        </ul>
        <li>Features</li>
        <ul>
          {car.features.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      </ul>
    </div>
  );
};
const Car = (car) => {
  return (
    <div>
      <Cardata car={car} />
    </div>
  );
};

export default Car;
