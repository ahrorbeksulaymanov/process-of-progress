import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

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
            className="bg-rgba"
            style={{
              background:
                "url(https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="banner-overlay">
              <div className="container">
                <h1 className="text-capitalize">
                  {isRu
                    ? "Мы работаем по всему миру"
                    : "We work worldwide"}
                </h1>
                <p>
                  {isRu
                    ? "Работает по всему миру торговая компания в орехи, семечки и сухофрукты"
                    : "Worldwide operating trading company in nuts, seeds and dried fruit"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-rgba"
            style={{
              background:
                "url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600)",
            }}
          >
            <div className="banner-overlay">
            <div className="container">
                <h1 className="text-capitalize">
                  {isRu
                    ? "Мы работаем по всему миру"
                    : "We work worldwide"}
                </h1>
                <p>
                  {isRu
                    ? "Работает по всему миру торговая компания в орехи, семечки и сухофрукты"
                    : "Worldwide operating trading company in nuts, seeds and dried fruit"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-rgba"
            style={{
              background:
                "url(https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600)",
            }}
          >
            <div className="banner-overlay">
            <div className="container">
                <h1 className="text-capitalize">
                  {isRu
                    ? "Мы работаем по всему миру"
                    : "We work worldwide"}
                </h1>
                <p>
                  {isRu
                    ? "Работает по всему миру торговая компания в орехи, семечки и сухофрукты"
                    : "Worldwide operating trading company in nuts, seeds and dried fruit"}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
