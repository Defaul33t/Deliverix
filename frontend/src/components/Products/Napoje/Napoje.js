import React from "react";
import UniversalCard from "../UniversalCard";

const napoje = [
  {
    name: "Kofola",
    ingredients: "(2l)",
    price: 2.2,
  },
  {
    name: "Vinea",
    ingredients: "(1,5l)",
    price: 2.2,
  },
  {
    name: "Orangina",
    ingredients: "(1,5l)",
    price: 3.0,
  },
  {
    name: "Pivo 12°",
    ingredients: "(500ml)",
    price: 2.2,
  },
  {
    name: "Radler",
    ingredients: "(500ml)",
    price: 1.8,
  },
  {
    name: "Red Bull",
    ingredients: "(250ml)",
    price: 2.0,
  },
];

const Napoje = () => {
  return (
    <>
      <h3 id="napoje" className="my-10 text-5xl font-semibold">
        Nápoje
      </h3>
      <div className="grid-container-2rows">
        {napoje.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Napoje;
