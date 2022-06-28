import React from "react";

import AnnouncementBar from "../AnnouncementBar";
import Header from "../Header/Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
