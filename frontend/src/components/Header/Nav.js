import React, { useContext } from "react";
import { Link } from "gatsby";
import useDevice from "../../hooks/useDevice";
import useToggle from "../../hooks/useToggle";
import MainContext from "../../context/mainContext";

import Hamburger from "hamburger-react";
import Drawer from "./Drawer";
import OrderModal from "./Order/OrderModal";

import cartIcon from "../../images/cart-green.svg";

const MobileNav = () => {
  const [drawerOpen, setDrawer] = useToggle(false);
  const ctx = useContext(MainContext);

  return (
    <>
      <div className="flex gap-2 relative">
        <img
          onClick={() => ctx.openCart()}
          className="w-8 cursor-pointer"
          src={cartIcon}
          alt="User icon"
        />
        <Hamburger toggled={drawerOpen} size="32" onToggle={() => setDrawer()} color="#538504" />
      </div>
      {drawerOpen && <Drawer setDrawer={setDrawer} />}
    </>
  );
};

const DesktopNav = () => {
  const ctx = useContext(MainContext);

  return (
    <ul className="flex items-center gap-10">
      <li className="text-main-green font-bold cursor-pointer">
        <Link to="/#uvod">ÚVOD</Link>
      </li>
      <li className="text-main-green font-bold cursor-pointer">
        <Link to="/kontakt">KONTAKT</Link>
      </li>
      <li className="px-10 py-2 bg-main-green text-white rounded-md font-bold cursor-pointer">
        <Link to="/#menu">MENU</Link>
      </li>
      <li className="pl-5 border-main-green border-l-2">
        <img
          onClick={() => ctx.openCart()}
          className="w-8 cursor-pointer"
          src={cartIcon}
          alt="User icon"
        />
      </li>
    </ul>
  );
};

const Nav = () => {
  const deviceWidth = useDevice();
  const ctx = useContext(MainContext);

  return (
    <nav>
      {deviceWidth === "mobile" ? <MobileNav /> : <DesktopNav />}
      {ctx.cartIsOpen && <OrderModal />}
    </nav>
  );
};

export default Nav;
