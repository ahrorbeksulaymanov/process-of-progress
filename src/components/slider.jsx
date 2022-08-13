import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function MySlider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="icon">
              <i className="fas fa-comments"></i>
            </div>
            <p className="m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="testimonial-author text-center">
              <h5>Rup Jakhar</h5>
              <h6>Web Desinger</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="icon">
              
              <i className="fas fa-comments"></i>
            </div>
            <p className="m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial-author text-center">
              <h5>Yogesh Singh</h5>
              <h6>Web Desinger</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item text-center">
            <div className="icon">
              
              <i className="fas fa-comments"></i>
            </div>
            <p className="m-auto">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="testimonial-author text-center">
              <h5>Vivek Singh</h5>
              <h6>Web Desinger</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
