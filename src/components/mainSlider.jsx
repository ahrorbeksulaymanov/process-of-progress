import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Autoplay} from "swiper";

export default function MainSlider({ isRu }) {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-rgba first"
          >
            <div className="banner-overlay">
              <div className="container">
                <h1 className="text-capitalize">
                  {isRu
                    ? "МЫ РАБОТАЕМ ПО ВСЕМУ МИРУ"
                    : "WE WORK WORLDWIDE"}
                </h1>
                <p>
                  {isRu
                    ? "Торговая компания по экспорту орехов, бобовых и сухофруктов из Узбекистана"
                    : "Trading company in nuts, pulses and dried fruit from Uzbekistan"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-rgba second"
          >
            <div className="banner-overlay">
            <div className="container">
            <h1 className="text-capitalize">
                  {isRu
                    ? "МЫ РАБОТАЕМ ПО ВСЕМУ МИРУ"
                    : "WE WORK WORLDWIDE"}
                </h1>
                <p>
                  {isRu
                    ? "Торговая компания по экспорту орехов, бобовых и сухофруктов из Узбекистана"
                    : "Trading company in nuts, pulses and dried fruit from Uzbekistan"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-rgba third"
          >
            <div className="banner-overlay">
            <div className="container">
            <h1 className="text-capitalize">
                  {isRu
                    ? "МЫ РАБОТАЕМ ПО ВСЕМУ МИРУ"
                    : "WE WORK WORLDWIDE"}
                </h1>
                <p>
                  {isRu
                    ? "Торговая компания по экспорту орехов, бобовых и сухофруктов из Узбекистана"
                    : "Trading company in nuts, pulses and dried fruit from Uzbekistan"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
