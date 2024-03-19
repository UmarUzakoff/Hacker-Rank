import React from "react";
import cn from "./companies.module.css";

// images and icons
import peloton from "/assets/images/peloton_black.png";
import atlassian from "/assets/images/atlassian_black.png";
import bloomberg from "/assets/images/bloomberg_black.png";
import vmware from "/assets/images/vmware_black.png";
import stripe from "/assets/images/stripe_black.png";
import goldman from "/assets/images/goldmansachs_black.png";
import adobe from "/assets/images/adobe_black.png";
import linkedin from "/assets/images/linkedin_black.png";

const Companies = () => {
  return (
    <div className={cn.sponsors}>
      <img width="91" src={peloton} alt="peloton_black" />
      <img width="91" src={atlassian} alt="atlassian_black" />
      <img width="91" src={bloomberg} alt="bloomberg_black" />
      <img width="91" src={vmware} alt="vmware_black" />
      <img width="91" src={stripe} alt="stripe_black" />
      <img width="91" src={goldman} alt="goldmansachs_black" />
      <img width="91" src={adobe} alt="adobe_black" />
      <img width="91" src={linkedin} alt="linkedin_black" />
    </div>
  );
};

export default Companies;
