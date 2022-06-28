import React from "react";

import closeIcon from "../../../images/close-btn.svg";

const Headline = ({ closeCart }) => {
  return (
    <div className="mb-16 flex items-center justify-between">
      <h3 className="text-3xl font-bold">Vaša objednávka</h3>
      <img
        onClick={() => closeCart()}
        className="w-8 cursor-pointer"
        src={closeIcon}
        alt="close button"
      />
    </div>
  );
};

export default Headline;
