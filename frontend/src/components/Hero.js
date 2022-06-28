import React from "react";
import useDevice from "../hooks/useDevice";

import hero_desktop from "../images/hero-desktop.jpg";
import hero_mobile from "../images/hero-mobile.jpg";

const Hero = () => {
  const deviceWidth = useDevice();

  return (
    <section>
      <img
        className="w-full max-w-screen-3xl mx-auto 3xl:rounded-2xl"
        src={deviceWidth === "mobile" ? hero_mobile : hero_desktop}
        alt="hero image"
      />
    </section>
  );
};

export default Hero;
