import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import cn from "./reviewcarousel.module.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import carouselData from "./carouselData";

export const ReviewCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          20: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className={cn.mySwiper}>
        <div>
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div key={item.id} className={cn.card}>
                <img width="80" height="60" src={item.imgUrl} alt="img" />
                <h4>{item.desc}</h4>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
