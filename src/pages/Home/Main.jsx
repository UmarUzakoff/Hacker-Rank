import React from "react";
import cn from "./main.module.css";
import Problem from "./Sections/Problem/Problem";
import Hero from "./Sections/Hero/Hero";
import { Interview } from "./Sections/Interview/Interview";
import Reviews from "./Sections/Reviews/Reviews";
import Join from "./Sections/Join/Join";

const Main = () => {
  return (
    <main className={`${cn.header} `}>
      <Hero />
      <Problem />
      <Interview />
      <Reviews />
      <Join />
    </main>
  );
};

export default Main;
