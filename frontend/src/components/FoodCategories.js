import React from "react";

import { icons } from "../images/icons/icons";

const FoodCategories = () => {
  return (
    <section id="menu" className="my-20 px-5">
      <div className="max-w-sm md:max-w-2xl xl:max-w-none mx-auto">
        <div className="mx-auto my-8 flex justify-center gap-8 md:gap-[76px] flex-wrap">
          {icons.map((icon) => {
            /**
             * [0] - obrazok
             * [1] - href
             */
            return (
              <a href={`#${icon[1]}`} key={Math.random()}>
                <img
                  className="w-14 h-14 md:w-20 md:h-20 object-contain"
                  src={icon[0]}
                  alt="category icon"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
