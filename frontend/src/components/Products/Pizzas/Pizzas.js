import React from "react";

import PizzaCard from "./PizzaCard";
import WrapperFood from "../../UI/WrapperFood";

import { pizzas } from "../../../images/pizzas/pizzas";

const Pizzas = () => {
  return (
    <>
      <h3 id="pizza" className="mb-10 text-5xl font-semibold">
        Pizza
      </h3>
      <div className="grid-container-3rows">
        {pizzas.map((pizza) => {
          return <PizzaCard {...pizza} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Pizzas;
