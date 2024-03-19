import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const Layout = ({ children }) => {
  const url = useLocation().pathname;
  return (
    <div className="main_box">
      {url === "/404" ||
      url === "/auth/login" ||
      url === "/auth/register" ? null : (
        <Header />
      )}
      {children}
      {url === "/404" ||
      url === "/auth/login" ||
      url === "/auth/register" ? null : (
        <Footer />
      )}
    </div>
  );
};
