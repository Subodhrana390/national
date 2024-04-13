import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";

const Banner = () => {
  const query = gql`
    query MyQuery {
      banners {
        title
        image {
          url
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(query);

  if (loading) return <Loader />;
  if (error) return <pre>{error.message}</pre>;
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
      {data.banners.length > 0 ? (
        <>
          {data.banners.map((ban) => (
            <SwiperSlide className="text-center font-[18px] bg-white flex justify-center items-center h-full">
              <img
                src={ban.image.url}
                className="h-[500px] w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </>
      ) : (
        ""
      )}
    </Swiper>
  );
};

export default Banner;
