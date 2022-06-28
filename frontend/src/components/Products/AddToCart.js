import React from "react";

import cart from "../../images/cart.svg";

const AddToCart = ({ side }) => {
  const styles = {
    left: side === "left" && 0,
    right: side === "right" && 0,
  };

  return (
    <div style={{ ...styles }} className="cart-add">
      <img className="relative z-10" src={cart} alt="cart icon" />
    </div>
  );
};

export default AddToCart;
