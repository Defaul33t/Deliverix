import React from "react";

import addBtn from "../../../images/add-btn.svg";

const Note = () => {
  return (
    <div className="my-5 flex gap-5">
      <h4 className="text-xl font-bold">Pridať poznámku </h4>
      <img className="w-6 h-6" src={addBtn} alt="add button" />
    </div>
  );
};

export default Note;
