import React from "react";

const OptionPicker = (props) => {
  const [currentState, setState, hasID] = props.state;
  /**
   * stateOptions [option1, option2..]
   */
  const stateValues = props.stateValues;
  const [titleA, titleB] = props.titles;

  return (
    <div className="flex justify-between gap-5">
      <button
        onClick={() => setState(stateValues[0])}
        style={{
          background: currentState === stateValues[0] && "#538504",
          color: currentState === stateValues[0] && "white",
        }}
        className="w-52 p-2 border-[1px] border-main-green text-main-green rounded-lg"
      >
        {titleA}
      </button>
      <button
        onClick={() => setState(stateValues[1])}
        style={{
          background: currentState === stateValues[1] && "#538504",
          color: currentState === stateValues[1] && "white",
        }}
        className="w-52 p-2 border-[1px] border-main-green text-main-green rounded-lg relative"
        id="additionalCost"
      >
        {titleB}
      </button>
    </div>
  );
};

export default OptionPicker;
