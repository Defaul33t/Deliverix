import React from "react";

const AmountPicker = React.forwardRef((props, ref) => {
  const { amount } = props;

  return (
    <input
      className="w-20 border-[1px] border-main-dark rounded-sm text-2xl text-center"
      type="number"
      defaultValue={amount}
      ref={ref}
      minLength="1"
    />
  );
});

export default AmountPicker;
