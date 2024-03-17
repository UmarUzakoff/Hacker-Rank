import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const Layout = ({ children }) => {
  const url = useLocation().pathname;
  return (
    <>
      {url === "/404" ? null : <Header />}
      {children}
      {url === "/404" ? null : <Footer />}
    </>
  );
};
