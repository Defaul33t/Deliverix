import React from "react";
import UniversalCard from "../UniversalCard";

const prilohy = [
  {
    name: "Ryža",
    ingredients: "(150g)",
    price: 2.0,
  },
  {
    name: "Varené zemiaky",
    ingredients: "(150g)",
    price: 2.0,
  },
  {
    name: "Pečené zemiaky",
    ingredients: "(150g)",
    price: 2.0,
  },
  {
    name: "Hranolky",
    ingredients: "(150g)",
    price: 2.5,
  },
  {
    name: "Zemiaková placka",
    ingredients: "(150g)",
    price: 2.5,
  },
  {
    name: "Grilovaná zelenina",
    ingredients: "cuketa, baklažán, paradajka, paprika, šampiňóny (200g)",
    price: 4.7,
  },
];

const Prilohy = () => {
  return (
    <>
      <h3 id="prilohy" className="my-10 text-5xl font-semibold">
        Prílohy
      </h3>
      <div className="grid-container-2rows">
        {prilohy.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Prilohy;
