import React from "react";
import { Link } from "gatsby";

import closeBtn from "../../images/close-btn.svg";

const Drawer = ({ setDrawer }) => {
  return (
    <div id="drawer" className="w-60 h-full fixed top-0 right-0  bg-white shadow-2xl z-30">
      <div className="p-5 h-full">
        <img
          onClick={() => setDrawer()}
          className="w-8 h-8 cursor-pointer"
          src={closeBtn}
          alt="close button"
        />
        <ul className="h-full flex flex-col justify-center items-center gap-10">
          <li className="text-main-green text-xl font-bold cursor-pointer">
            <Link to="/#uvod" onClick={() => setDrawer()}>
              ÚVOD
            </Link>
          </li>
          <li className="text-main-green text-xl font-bold cursor-pointer">
            <Link to="/kontakt" onClick={() => setDrawer()}>
              KONTAKT
            </Link>
          </li>
          <li className="px-10 py-2 bg-main-green text-xl text-white rounded-md font-bold cursor-pointer">
            <Link to="/#menu" onClick={() => setDrawer()}>
              MENU
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
