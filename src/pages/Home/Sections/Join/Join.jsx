import React from "react";
import cn from "./join.module.css";

const Join = () => {
  return (
    <div className={cn.join_box}>
      <div className={cn.join_left}>
        <div>
          <h4 className={cn.title}>
            Practice coding challenges &<span>prep for interviews</span>
          </h4>
          <p className={cn.subtitle}>
            Start practicing your skills now and land the job of your dreams.
          </p>
          <button className={cn.btn}>Join the community</button>
        </div>
      </div>

      <div className={cn.join_right}>
        <h4 className={cn.title}>
          Get started <span>hiring with HackerRank</span>
        </h4>
        <p className={cn.subtitle}>
          More than 3,000 tech teams, representing all industries and from
          countries around the world, trust HackerRank
        </p>
        <button className={cn.btn}>Request a demo</button>
      </div>
    </div>
  );
};

export default Join;
