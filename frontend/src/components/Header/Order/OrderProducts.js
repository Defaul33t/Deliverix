import React, { useContext } from "react";
import MainContext from "../../../context/mainContext";

const OrderProducts = ({ products }) => {
  const ctx = useContext(MainContext);

  return (
    <ul className="max-h-64 my-10 flex flex-col gap-5 overflow-auto">
      {products.map((product) => {
        return (
          <li
            className="py-2 flex justify-between items-center border-b-[1px] border-main-dark"
            key={Math.random()}
          >
            <p className="w-1/3 text-lg md:text-2xl font-semibold">{product.name}</p>
            <div className="flex gap-5">
              <span onClick={() => ctx.decrement(product.name)} className="text-2xl cursor-pointer">
                -
              </span>
              <span className="text-2xl font-semibold">{product.amount}</span>
              <span onClick={() => ctx.increment(product.name)} className="text-2xl cursor-pointer">
                +
              </span>
            </div>
            <span className="w-1/3 pr-5 text-2xl font-semibold text-right text-main-orange">
              {(product.price * product.amount).toFixed(2)} €
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default OrderProducts;
