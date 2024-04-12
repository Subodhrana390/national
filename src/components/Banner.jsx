import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-full"
    >
      <SwiperSlide className="text-center font-[18px] bg-white flex justify-center items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1613418337534-aa921419f75e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[500px] w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="text-center font-[18px] bg-white flex justify-center items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1712303700832-57d2b2b916b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[500px] w-full object-center md:object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
