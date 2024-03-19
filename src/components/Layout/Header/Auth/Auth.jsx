import React from "react";
import cn from "./auth.module.css";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className={`${cn.auth}`}>
      <div className={`${cn.wrapper}`}>
        <div className={`${cn.content}`}>
          <Link to={"/"} className={`${cn.link}`}>
            Contact us
          </Link>
          <span className={`${cn.line}`}>|</span>
          <Link to={"/auth/login"} className={`${cn.link}`}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
