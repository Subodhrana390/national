import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = (banners) => {
  return <div>{banners.length > 0 ? <Carousel></Carousel> : "No banner"}</div>;
};

export default Banner;
