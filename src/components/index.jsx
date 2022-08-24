import React from "react";
import "swiper/css";
import MainSlider from "./mainSlider";
import Products from "./products";
import ToTop from "./toTop";
import MyForm from "./form";
import MyHeader from "./header";
import {FaFacebookF, FaInstagram, FaTelegramPlane} from "react-icons/fa";

const MainPage = ({allLangs, lang, setLang, isRu}) => {

    return (
        <>
            <MyHeader allLangs={allLangs} lang={lang} setLang={setLang} isRu={isRu}/>

            <div className="banner text-center" data-scroll-index="0">
                <MainSlider isRu={isRu}/>
            </div>

            <div className="about-us section-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-title text-center">
                            <h3>
                                {isRu
                                    ?
                                    "МЫ ЛУЧШИЕ В СВОЕЙ РАБОТЕ"
                                    :
                                    "We Are Best At Our Work"
                                }

                            </h3>
                            <p>
                                Suspendisse fringilla eget arcu et bibendum. Vestibulum
                                elementum dui tempus dolor gravida, vel mattis erat fermentum.
                            </p>
                            <span className="section-title-line"></span>{" "}
                        </div>
                        <div className="col-md-6 mb-50">
                            <div className="section-info">
                                <div className="sub-title-paragraph">
                                    <h4>
                                        {isRu
                                            ?
                                            "Вы можете завоевать мир."
                                            :
                                            "You can conquer the world."
                                        }
                                    </h4>
                                    <h5>
                                        {isRu
                                            ?
                                            "Если у вас правильный настрой, то вы можете править миром. Ваше здоровье!"
                                            :
                                            "If you have right set of mind and thus you can rule the world. Cheers!"
                                        }

                                    </h5>
                                    <p>
                                        {isRu
                                            ?
                                            "ООО «Процесс» — международная компания по торговле орехами, семечками и сухофруктами, " +
                                            "а также поставщик многих известных покупателей. Наши агенты по закупкам " +
                                            "по всему миру находятся в ежедневном контакте с поставщиками, " +
                                            "чтобы гарантировать качество и контрактные количества. " +
                                            "Отдел логистики организует чистое и быстрое складирование и транспортировку, " +
                                            "а трейдеры Process International всегда к вашим услугам для получения информации и совета."
                                            :
                                            "Process LLC is a worldwide operating trading company in nuts" +
                                            "seeds and dried fruit and a supplier to many well known buyers." +
                                            "Our purchasing agents around the world are in daily contact with" +
                                            "suppliers to ensure quality and contracted quantities." +
                                            "The logistics department arranges clean and fast warehousing and" +
                                            "transportation and the Process International traders are" +
                                            "always at your service for information and advice."
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-50">
                            <div className="section-img">
                                {" "}
                                <img
                                    src={require("../images/about_us/gilos-2.jpg")}
                                    alt=""
                                />{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Products isRu={isRu}/>

            {/* <News isRu={isRu} /> */}

            {/* <div className="testimonials">
        <div className="testimonials-overlay section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="owl-carousel owl-theme">
                  <MySlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

            <div className="contact section-padding" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 section-title text-center">
                            <h3>{isRu ? "Связаться!" : "Get in touch!"}</h3>
                            <p>{isRu ? "Хотите узнать больше о наших услугах или хотите стать нашим клиентом? Свяжитесь с нами, мы будем рады помочь!"
                                : "Want to know more about our services, or do you want to become a customer? Get in touch with us, we're happy to help!"}</p>
                            <span className="section-title-line"></span>{" "}
                        </div>
                        <div className="col-md-12 mb-5">
                            <iframe
                                style={{width: "100%", height: "400px", border: "0"}}
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4588.604992758378!2d69.24821636255184!3d41.310980245326235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38ae8b0543e466e3%3A0xd38c6d4363440967!2sUzbekistan%20Ave%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.3102984!2d69.25078289999999!5e0!3m2!1sen!2s!4v1660471551519!5m2!1sen!2s"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="col-md-4">
                            <div className="part-info">
                                <div className="info-box">
                                    <div className="icon">
                                        {" "}
                                        <i className="fas fa-phone"></i>{" "}
                                    </div>
                                    <div className="content">
                                        <h4>{isRu ? "Телефон" : "Phone"} :</h4>
                                        <p>930085504</p>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="icon">
                                        {" "}
                                        <i className="fas fa-map-marker-alt"></i>{" "}
                                    </div>
                                    <div className="content">
                                        <h4>{isRu ? "Адрес" : "Address"} :</h4>
                                        <p>Uzbekistan, Tashkent</p>
                                    </div>
                                </div>
                                <div className="info-box">
                                    <div className="icon">
                                        {" "}
                                        <i className="fas fa-envelope"></i>{" "}
                                    </div>
                                    <div className="content">
                                        <h4>{isRu ? "Почта" : "Mail"} :</h4>
                                        <p>
                                            <a href="mailto:husanht@gmail.com">husanht@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <MyForm isru={isRu}/>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-copy">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
              <span>
                <FaTelegramPlane/>
              </span>
                            <span>
                <FaInstagram/>
              </span>
                            <span>
                <FaFacebookF/>
              </span>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0 mt-2">
                                {new Date().getFullYear()} &copy; PROCESS. Website Designed by{" "}
                                <a
                                    href="http://t.me/sulaymanov_a"
                                    target="_blank"
                                    rel="dofollow"
                                >
                                    Ahror
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <ToTop/>
        </>
    );
};
export default MainPage;
