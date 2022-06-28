import React from "react";
import UniversalCard from "../UniversalCard";

const tortilla = [
  {
    name: "Crispy chicken tortilla s hranolkami ",
    ingredients: "Kuracie prsia v corn flakes, zelenina, BBQ, cheddar (400g)",
    price: 8.5,
  },
  {
    name: "Tortilla Mexicana s hranolkami",
    ingredients: "Mleté hovädzie mäso, mexická zmes, zelenina, cheddar (400g)",
    price: 11.5,
  },
  {
    name: "Tortilla Gyros s hranolkami",
    ingredients:
      "marinované kuracie stehná, ľadový šalát, uhorka, paradajka, červená cibuľa, jogurtový dresing (400g)",
    price: 8.5,
  },
];

const Tortilla = () => {
  return (
    <>
      <h3 id="tortilla" className="my-10 text-5xl font-semibold">
        Tortilla
      </h3>
      <div className="grid-container-2rows">
        {tortilla.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Tortilla;
