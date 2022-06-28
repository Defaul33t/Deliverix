import React, { useState, useContext } from "react";
import MainContext from "../../../context/mainContext";

import Headline from "./Headline";
import OptionPicker from "../../UI/OptionPicker";
import OrderProducts from "./OrderProducts";
import Note from "./Note";

const OrderModal = () => {
  const [delivery, setDelivery] = useState("delivery");

  const ctx = useContext(MainContext);

  const finalAmount =
    delivery === "delivery" ? (ctx.totalAmount + 3).toFixed(2) : ctx.totalAmount.toFixed(2);

  return (
    <div className="w-full h-screen flex fixed top-0 left-0 bg-black bg-opacity-50 z-50">
      <div
        id="pizzaPicker"
        className="w-full h-fit max-h-full max-w-xl p-8 bg-white shadow-2xl rounded-t-lg lg:rounded-lg overflow-auto"
      >
        <Headline closeCart={ctx.openCart} />
        <OptionPicker
          state={[delivery, setDelivery]}
          stateValues={["pickup", "delivery"]}
          titles={["Vyzdvihnutie", "Dovoz"]}
          extraCost={true}
        />
        <OrderProducts products={ctx.cartProducts} />
        <div className="pr-5 pb-5 text-right text-2xl border-b-2 font-semibold">
          SPOLU
          <span className="ml-5 text-main-orange">{finalAmount} €</span>
        </div>
        <Note />
        <button
          onClick={() => ctx.order(delivery)}
          className="w-full py-3 text-center bg-main-orange text-white text-2xl font-bold rounded-lg"
        >
          OBJEDNAŤ
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
