import React from "react";

const Pricetag = ({ price }) => {
  return (
    <span className="my-4 px-2 py-1 rounded-md bg-main-orange text-3xl text-white font-semibold">
      {price} €
    </span>
  );
};

export default Pricetag;
