import React, { useContext } from "react";
import MainContext from "../context/mainContext";

import cart from "../images/cart.svg";

const CartOpener = () => {
  const ctx = useContext(MainContext);

  return (
    <>
      {ctx?.cartProducts?.length !== 0 && (
        <div
          onClick={() => ctx.openCart()}
          id="bottom-cart"
          className="w-full max-w-xs p-3 flex items-center justify-center gap-5 fixed z-30 bottom-2 right-1/2 translate-x-1/2 bg-main-green rounded-md shadow-md cursor-pointer"
        >
          <p className="text-white">Otvoriť košík</p>
          <span className="text-lg text-white">{ctx?.cartProducts?.length}</span>
          <img src={cart} alt="cart icon" />
        </div>
      )}
    </>
  );
};

export default CartOpener;
