import React from "react";
import useToggle from "../../../hooks/useToggle";

import Pricetag from "../../UI/Pricetag";
import AddToCart from "../AddToCart";
import PizzaModal from "./PizzaModal";

const PizzaCard = (props) => {
  const { name, ingredients, image, price } = props;

  const [cartIsOpen, setOpen] = useToggle(false);
  const [pizzaPickerOpen, setPickerOpen] = useToggle(false);

  return (
    <>
      {pizzaPickerOpen && <PizzaModal pizza={props} closeModal={setPickerOpen} />}
      <div
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setPickerOpen(true)}
        className="w-full px-4 py-2 border-2 border-gray-ad rounded-md text-right relative overflow-hidden cursor-pointer"
      >
        <div className="flex flex-col items-end gap-2 relative z-10 pointer-events-none">
          <h4 className="text-3xl font-semibold">{name}</h4>
          <p>{ingredients}</p>
          <Pricetag price={price.toFixed(2)} />
        </div>
        <img className="pizza-image" src={image} alt="pizza image" />
        {cartIsOpen && <AddToCart side="left" />}
      </div>
    </>
  );
};

export default PizzaCard;
