import React from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";
import Wrapper from "./UI/Wrapper";

const Footer = () => {
  return (
    <footer className="mt-40 bg-orange-100 shadow-2xl">
      <Wrapper>
        <div className="px-5 pt-20 pb-28 flex flex-col sm:flex-row gap-10 justify-between items-start font-medium text-xl">
          <img className="max-w-xvs w-full" src={logo} alt="deliverix logo" />
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/#uvod">Úvod</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link to="/#menu">Menu</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>0948 484 900</li>
            <li>deliverix@gmail.com</li>
          </ul>
          <ul>
            <address>
              DeliveriX <br />
              Púpavová 27/A <br />
              841 04 Bratislava <br />
            </address>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
