import React from "react";

import UniversalCard from "../UniversalCard";

const burgers = [
  {
    name: "DeliveriX Burger s hranolkami",
    ingredients:
      "Hovädzie mäso, slanina, cheddar, šalát, paradajka, vajce, kyslá uhorka, BBQ dresing, hranolky (400g)",
    price: 11.5,
  },
  {
    name: "Texas Burger s hranolkami",
    ingredients:
      "Hovädzie mäso, cheddar, jalapeňo, fazuľa, kukurica, chilli, šalát, chilli majonéza, hranolky (400g)",
    price: 11.5,
  },
  {
    name: "Cheeseburger s hranolkami",
    ingredients:
      "Hovädzie mäso, 2x cheddar, slanina, karamelizovaná cibuľa, listový šalát, paradajka, kyslá uhorka, kečup, majonéza, hranolky (400g)",
    price: 11.5,
  },
];

const Burgers = () => {
  return (
    <>
      <h3 id="burger" className="my-10 text-5xl font-semibold">
        Burger
      </h3>
      <div className="grid-container-2rows">
        {burgers.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Burgers;
