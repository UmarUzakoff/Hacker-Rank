import React from "react";
import Carousel from "./Carousel/Carousel";
import Auth from "./Auth/Auth";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <Carousel />
      <Auth />
      <Navbar />
    </header>
  );
};

export default Header;
