import React from "react";

const Input = ({ subject, settings, style }) => {
  return (
    <div className="my-2 flex flex-col gap-2">
      <label className="text-xl font-semibold">{subject}</label>
      <input
        className="w-full max-w-lg p-2 border-[1px] border-main-dark rounded-md"
        style={{ ...style }}
        {...settings}
      />
    </div>
  );
};

export default Input;
