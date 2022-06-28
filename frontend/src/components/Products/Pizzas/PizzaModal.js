import React, { useState, useContext, useRef } from "react";
import MainContext from "../../../context/mainContext";

import closeIcon from "../../../images/close-btn.svg";
import AmountPicker from "../../UI/AmountPicker";
import OptionPicker from "../../UI/OptionPicker";

const PizzaModal = ({ pizza, closeModal }) => {
  const [foodSize, setSize] = useState("normal");

  const amountRef = useRef(1);
  const ctx = useContext(MainContext);

  const submitHandler = () => {
    if (amountRef.current.value <= 0) {
      amountRef.current.style.background = "#FFBABA";
      return;
    }

    ctx.add({ ...pizza, name: `${pizza.name} ${foodSize}` }, +amountRef.current.value, foodSize);
    closeModal();
  };

  return (
    <div className="w-full h-screen flex fixed top-0 left-0 bg-black bg-opacity-50 z-50">
      <div
        id="pizzaPicker"
        className="w-full h-fit max-w-xl p-8 bg-white shadow-2xl rounded-t-lg lg:rounded-lg"
      >
        <div className="mb-16 flex items-center justify-between">
          <h3 className="text-2xl font-bold">Velkosť pizze ({pizza.name})</h3>
          <img
            onClick={closeModal}
            className="w-8 cursor-pointer"
            src={closeIcon}
            alt="close button"
          />
        </div>
        <OptionPicker
          state={[foodSize, setSize]}
          stateValues={["normal", "big"]}
          titles={["30 cm", "45 cm"]}
        />
        <div className="mt-10 flex justify-between items-center gap-5 flex-wrap">
          <p className="text-xl">počet</p>
          <AmountPicker ref={amountRef} amount={1} />
          <button
            onClick={submitHandler}
            className="w-full sm:w-52 py-2 bg-main-orange text-white rounded-lg text-xl font-semibold"
          >
            VYBRAŤ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;
