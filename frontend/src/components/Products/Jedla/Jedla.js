import React from "react";
import UniversalCard from "../UniversalCard";

const jedla = [
  {
    name: "Vyprážaný syr",
    ingredients: "Vyprážaný syr (150g)",
    price: 5.9,
  },
  {
    name: "Vyprážaný syr so šunkou",
    ingredients: "Vyprážaný syr so šunkou (150g)",
    price: 6.3,
  },
  {
    name: "Vyprážaný kurací rezeň",
    ingredients: "Vyprážaný kurací rezeň (150g)",
    price: 6.9,
  },
  {
    name: "Kurací Cordon Bleu",
    ingredients: "vyprážané kuracie prsia plnené cheddarom a šunkou (150g)",
    price: 7.5,
  },
  {
    name: "Kurací černohor",
    ingredients: "Kuracie prsia v černohorskom cestíčku (150g)",
    price: 6.9,
  },
  {
    name: "Vyprážané šampiňóny",
    ingredients: "Vyprážané šampiňóny (150g)",
    price: 5.9,
  },
];

const Jedla = () => {
  return (
    <>
      <h3 id="jedla" className="my-10 text-5xl font-semibold">
        Jedla
      </h3>
      <div className="grid-container-2rows">
        {jedla.map((burger) => {
          return <UniversalCard {...burger} key={Math.random()} />;
        })}
      </div>
    </>
  );
};

export default Jedla;
