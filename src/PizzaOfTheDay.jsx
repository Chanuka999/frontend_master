import React from "react";
import { usePizzaOfTheDay } from "./usePizzaOfTheDay.jsx";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const PizzaOfTheDay = usePizzaOfTheDay();

  if (!PizzaOfTheDay) {
    return <div>Loading....</div>;
  }
  return (
    <div className="pizza-of-the-day-info">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{PizzaOfTheDay.name}</h3>
          <p>{PizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From:{intl.format(PizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={PizzaOfTheDay.image}
          alt={PizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
