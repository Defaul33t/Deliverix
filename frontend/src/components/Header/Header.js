import React from "react";
import { Link } from "gatsby";

import logo from "../../images/logo.png";

import Wrapper from "../UI/Wrapper";
import Nav from "./Nav";

const Header = () => {
  return (
    <Wrapper>
      <header id="uvod" className="p-5 flex justify-between items-center">
        <Link to="/">
          <img className="max-w-xvs w-full" src={logo} alt="DeliveriX logo" />
        </Link>
        <Nav />
      </header>
    </Wrapper>
  );
};

export default Header;
