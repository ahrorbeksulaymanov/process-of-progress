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
                                    "PROCESS IN SEARCH OF PROGRESS!"
                                }

                            </h3>
                            <span className="section-title-line"></span>{" "}
                        </div>
                        <div className="col-md-6 mb-50">
                            <div className="section-info">
                                <div className="sub-title-paragraph">
                                    {/*<h4>*/}
                                    {/*    {isRu*/}
                                    {/*        ?*/}
                                    {/*        "Вы можете завоевать мир."*/}
                                    {/*        :*/}
                                    {/*        "You can conquer the world."*/}
                                    {/*    }*/}
                                    {/*</h4>*/}
                                    <h5>
                                        {isRu
                                            ?
                                            "Если у вас правильный настрой, то вы можете править миром. Ваше здоровье!"
                                            :
                                            "If you have right set of mind and thus you can rule the world. Cheers!"
                                        }

                                    </h5>
                                    <p>
                                        {isRu ? "ООО «Процесс» — международная торговая компания по продаже орехов, бобовых и сухофруктов, а также поставщик многих известных покупателей. Мы новая компания с большим опытом в области экспорта сельскохозяйственной продукции. В частности, руководитель компании г-н Хусан Хайдаров одновременно является председателем Ассоциации экспортеров овощей и фруктов Узбекистана, а также почетным консультантом проекта ShirinMeva, финансируемого ЕС и Всемирным банком. Наши агенты по закупкам находятся в ежедневном контакте с поставщиками, чтобы гарантировать качество и контрактные количества. Отдел логистики организует чистое и быстрое складирование и транспортировку, а международные трейдеры Process всегда к вашим услугам для получения информации и совета."
                                            : "Process LLC is a worldwide operating trading company in nuts, pulses and dried fruit and a supplier to many well known buyers.  We are a new established company with the big experience in the field of exporting agricultural products. Specifically, the head of the company Mr. Husan Haydarov is at the same time a Chairman of the Association of Vegetables and Fruits Exporters of Uzbekistan and also he is an honorable consultant of ShirinMeva project funded by EU and World Bank.  Our purchasing agents are in daily contact with suppliers to ensure quality and contracted quantities. The logistics department arranges clean and fast warehousing and transportation and the Process International traders are always at your service for information and advice."
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-50">
                            <div className="section-img">
                                {" "}
                                <img
                                    src={require("../images/about_us/kollaj_1.png")}
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
                            <p>{isRu ? "Хотите узнать больше о наших услугах или стать нашим клиентом? Свяжитесь с нами, мы будем рады помочь!"
                                : "Do you want to know more about our services, or do you want to become our customer? Get in touch with us, we're happy to help!"}</p>
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
                                        <a href="tel:+998 90 946 33 35">+998 90 946 33 35</a>
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
                                            <a href="mailto:info@theprocess.uz">info@theprocess.uz</a>
                                        </p>
                                        <p>
                                            <a href="mailto:export@theprocess.uz">export@theprocess.uz</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <MyForm isRu={isRu}/>

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
