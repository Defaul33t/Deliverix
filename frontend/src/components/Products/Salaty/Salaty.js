import React from "react";
import UniversalCard from "../UniversalCard";

const salaty = [
  {
    name: "Caesar šalát",
    ingredients: "rímsky šalát, kuracie prsia, slanina, parmezán, vajce, dresing, krutóny (350g)",
    price: 8.5,
  },
  {
    name: "Rukolový šalát",
    ingredients:
      "rukola, ľadový šalát, prosciuto crudo, sušené paradajky, olivy, parmezán, balsamico (250g)",
    price: 9.5,
  },
  {
    name: "Prílohový coleslaw",
    ingredients: "Prílohový coleslaw",
    price: 2.0,
  },
  {
    name: "Prílohový paradajkový",
    ingredients: "paradajka, cibuľa",
    price: 2.0,
  },
  {
    name: "Prílohový mix",
    ingredients: "paradajka, paprika, uhorka, cibuľa",
    price: 2.0,
  },
];

const Salaty = () => {
  return (
    <>
      <h3 id="salaty" className="my-10 text-5xl font-semibold">
        Šaláty
      </h3>
      <div className="grid-container-2rows">
        {salaty.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Salaty;
