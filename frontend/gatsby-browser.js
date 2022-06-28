import React from "react";
import "./src/styles/global.css";

import Layout from "./src/components/Layout/Layout";

import { MainContextProvider } from "./src/context/mainContext";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <MainContextProvider>{element}</MainContextProvider>;
};
