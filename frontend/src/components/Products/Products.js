import React from "react";
import WrapperFood from "../../components/UI/WrapperFood";

import Burgers from "../../components/Products/Burgers/Burgers";
import Jedla from "../../components/Products/Jedla/Jedla";
import Napoje from "../../components/Products/Napoje/Napoje";
import Pizzas from "../../components/Products/Pizzas/Pizzas";
import Polievky from "../../components/Products/Polievky/Polievky";
import Prilohy from "../../components/Products/Prilohy/Prilohy";
import Salaty from "../../components/Products/Salaty/Salaty";
import Tortilla from "../../components/Products/Tortilla/Tortilla";

const Products = () => {
  return (
    <section className="px-5">
      <WrapperFood>
        <Pizzas />
        <Burgers />
        <Polievky />
        <Tortilla />
        <Salaty />
        <Jedla />
        <Prilohy />
        <Napoje />
      </WrapperFood>
    </section>
  );
};

export default Products;
