import React from "react";
import cn from "./hero.module.css";
import { Link } from "react-router-dom";
import Companies from "../../../../components/Companies/Companies";

const Hero = () => {
  return (
    <section className={`${cn.hero}`}>
      <div>
        <h1>Skills speak louder than words</h1>
      </div>
      <div>
        <p>
          We help companies develop the strongest tech teams around. We help
          candidates sharpen their tech skills and pursue job opportunities.
        </p>
      </div>
      <div className={`${cn.btns}`}>
        <Link to={"/auth/register"} className={`${cn.sign_up}`}>
          Sign up
        </Link>
        <Link className={`${cn.demo}`}>Request demo</Link>
      </div>
      <p className={`${cn.second_p}`}>
        Over 40% of developers worldwide and 3,000 companies use HackerRank
      </p>

      <Companies />
    </section>
  );
};

export default Hero;
