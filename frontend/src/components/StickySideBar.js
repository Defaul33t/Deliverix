import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

import { icons } from "../images/icons/icons";

const StickySideBar = () => {
  const [inViewport, setInViewport] = useState(false);

  return (
    <>
      <ScrollTrigger onEnter={() => setInViewport(true)} onExit={() => setInViewport(false)} />
      <div className={inViewport ? "hide" : "show"} id="sticky-menu">
        <div className="sticky-container">
          {icons.map((icon) => {
            /**
             * [0] - obrazok
             * [1] - href
             */
            return (
              <a href={`#${icon[1]}`} key={Math.random()}>
                <img className="w-20 h-20 object-contain" src={icon[0]} alt="category icon" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StickySideBar;
