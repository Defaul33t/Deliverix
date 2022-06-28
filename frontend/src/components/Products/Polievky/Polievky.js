import React from "react";
import UniversalCard from "../UniversalCard";

const polievky = [
  {
    name: "Domáci hovädzí vývar",
    ingredients: "so zeleninou a rezancami (330ml)",
    price: 3.3,
  },
  {
    name: "Domáca kapustnica",
    ingredients: "s údeným mäsom, klobásou a hríbami (330ml)",
    price: 3.3,
  },
];

const Polievky = () => {
  return (
    <>
      <h3 id="polievky" className="my-10 text-5xl font-semibold">
        Polievky
      </h3>
      <div className="grid-container-1rows">
        {polievky.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Polievky;
