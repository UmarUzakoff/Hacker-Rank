import React from "react";
import cn from "./error.module.css";
import notfound from "/assets/images/notfound.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className={`${cn.notfound} container`}>
      <div className={`${cn.wrapper}`}>
        <img src={notfound} alt="error 404" />
        <h1>The page you are looking for doesn't exist</h1>
        <p>
          You may have mistyped the address or the page may have moved. If you
          think something is wrong feel free to contact support.
        </p>
        <div>
          <span>
            <FaArrowLeftLong />
          </span>
          <Link to={"/"}>back</Link>
          <Link to={"mailto:support@hackerrank.com"}>support</Link>
          <Link to={"/"}>home</Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
