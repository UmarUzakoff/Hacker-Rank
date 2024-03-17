import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import cn from "./carousel.module.css";

const Carousel = () => {
  return (
    <div className={`${cn.carousel}`}>
      <Swiper
        className={`${cn.swiper} mySwiper`}
        spaceBetween={30}
        speed={700}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
        <SwiperSlide>
          <span data-aos="zoom-out">
            The 2024 Developer Skills Report is here!
          </span>
          <button className={`${cn.btn}`} data-aos="zoom-out">
            Read now
          </button>
        </SwiperSlide>
        <SwiperSlide>
          HackerRank AI Day will unveil new innovations in AI and feature
          industry thought leaders.
          <button className={`${cn.btn}`}>Read agenda</button>
        </SwiperSlide>
        <SwiperSlide>
          HackerRank Launches Two New Products: SkillUp and Engage
          <button className={`${cn.btn}`}>Read now</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
