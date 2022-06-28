import React, { useState, useContext } from "react";
import MainContext from "../../context/mainContext";
import useToggle from "../../hooks/useToggle";

import Pricetag from "../UI/Pricetag";
import AddToCart from "./AddToCart";

import check from "../../images/check.svg";

const UniversalCard = ({ name, price, ingredients }) => {
  const [cartIsOpen, setOpen] = useToggle(false);
  const [isAdded, setAdded] = useState(false);

  const ctx = useContext(MainContext);

  const clickHandler = () => {
    setAdded(true);
    ctx.add({ name, price, ingredients }, 1, "normal");

    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <div
      onClick={clickHandler}
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="w-full px-4 py-2 border-2 border-gray-ad rounded-md relative overflow-hidden cursor-pointer"
    >
      <div className="flex flex-col items-start gap-1 relative z-10 pointer-events-none">
        <h4 className="text-2xl font-semibold">{name}</h4>
        <p className="text-xs md:text-base">{ingredients}</p>
        <Pricetag price={price.toFixed(2)} />
      </div>
      {cartIsOpen && <AddToCart side="right" />}
      {isAdded && (
        <p className="w-fit flex items-center mx-auto p-2 absolute z-20 bottom-0 left-1/2 -translate-x-1/2 bg-main-dark text-white rounded-t-md">
          Pridané do košíka <img className="w-6" src={check} alt="done icon" />
        </p>
      )}
    </div>
  );
};

export default UniversalCard;
