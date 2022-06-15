import { useState } from "react";
import { cars } from "./database/cars";
// Add a new object to the list of cars and display them on the screen.

export default function NP3twoQ2() {
  const initialCarState = {
    id: `c${cars.length + 1}`,
    brand: "",
    make: "",
    model: ""
  };
  const [car, setCar] = useState(initialCarState);

  const [carsList, setCarsList] = useState(cars);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCar((prev) => ({ ...prev, [name]: value }));
  };

  const addCar = (e) => {
    e.preventDefault();
    const carExists = cars.find(
      (eachCar) =>
        eachCar.brand === car.brand &&
        eachCar.make === car.make &&
        eachCar.model === car.model
    );
    carExists
      ? alert("car already exists")
      : setCarsList((prev) => [...prev, car]);
    setCar(initialCarState);
  };

  return (
    <div>
      <form onSubmit={addCar}>
        <input
          placeholder="car brand"
          value={car.brand}
          name="brand"
          onChange={inputHandler}
        />
        <input
          placeholder="car make"
          value={car.make}
          name="make"
          onChange={inputHandler}
        />
        <input
          placeholder="car model"
          value={car.model}
          name="model"
          onChange={inputHandler}
        />
        <button type="submit">Add car</button>
      </form>

      {carsList.map((car) => (
        <div key={car.id}>
          <p>
            {car.brand} {"  "}
            {car.make}
          </p>
          <p>{car.model}</p>
        </div>
      ))}
    </div>
  );
}

// time taken: 16 mins
