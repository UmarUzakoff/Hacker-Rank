import React from "react";
import cn from "./hero.module.css";
import { Link } from "react-router-dom";
import peloton from "/assets/images/peloton_black.png";
import atlassian from "/assets/images/atlassian_black.png";
import bloomberg from "/assets/images/bloomberg_black.png";
import vmware from "/assets/images/vmware_black.png";
import stripe from "/assets/images/stripe_black.png";
import goldman from "/assets/images/goldmansachs_black.png";
import adobe from "/assets/images/adobe_black.png";
import linkedin from "/assets/images/linkedin_black.png";

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
        <Link className={`${cn.sign_up}`}>Sign up</Link>
        <Link className={`${cn.demo}`}>Request demo</Link>
      </div>
      <p className={`${cn.second_p}`}>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
      <div className={`${cn.sponsors}`}>
          <img width="91" src={peloton} alt="peloton_black" />
          <img width="91" src={atlassian} alt="atlassian_black" />
          <img width="91" src={bloomberg} alt="bloomberg_black" />
          <img width="91" src={vmware} alt="vmware_black" />
          <img width="91" src={stripe} alt="stripe_black" />
          <img width="91" src={goldman} alt="goldmansachs_black" />
          <img width="91" src={adobe} alt="adobe_black" />
          <img width="91" src={linkedin} alt="linkedin_black" />
      </div>
    </section>
  );
};

export default Hero;
