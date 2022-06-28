import React from "react";

import Hero from "../components/Hero";
import FoodCategories from "../components/FoodCategories";
import StickySideBar from "../components/StickySideBar";
import Products from "../components/Products/Products";
import CartOpener from "../components/CartOpener";

// markup
const Homepage = () => {
  return (
    <main>
      <Hero />
      <FoodCategories />
      <StickySideBar />
      <Products />
      <CartOpener />
    </main>
  );
};

export default Homepage;
