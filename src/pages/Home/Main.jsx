import React from "react";
import cn from "./main.module.css";
import Problem from "./Sections/Problem/Problem";
import Hero from "./Sections/Hero/Hero";

const Main = () => {
  return (
    <main className={`${cn.header} `}>
      <Hero />
      <Problem />
    </main>
  );
};

export default Main;
