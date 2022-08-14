import React from 'react';
import 'swiper/css';
import useScrollTop from '../customHooks/useScroll';
import MainSlider from './mainSlider';
import News from './news';
import Products from './products';
import MySlider from './slider';
import ToTop from './toTop';
import {FaBars} from 'react-icons/fa'
import logo from '../images/process-logo_mini.png'

const MainPage = ({allLangs, lang, setLang,isRu}) => {

    const imageLink = 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';
    const scrollPosition = useScrollTop();

    const selectLang = (e) => {
        setLang(e)
        localStorage.setItem("lang", e)
    }

    return (
        <>
<nav className="navbar navbar-expand-lg" style={scrollPosition > 50 ? {background:"#fff",boxShadow: "0 0 5px #999"}:{background:"transparent"}}>
  <div className="container"> <a className="navbar-brand navbar-logo" href="#"> 
    <img src={logo} style={{width:"150px"}} alt="logo" className="logo-1" /> 
  </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <FaBars style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} />
    </button>
    <div className="collapse navbar-collapse" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"> <a className="nav-link" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} href="#" data-scroll-nav="0">{isRu ? "Главный" :"Home"}</a> </li>
        <li className="nav-item"> <a className="nav-link" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} href="#about" data-scroll-nav="1">{isRu ? "О нас" : "About us"}</a> </li>
        <li className="nav-item"> <a className="nav-link" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} href="#products" data-scroll-nav="2">{isRu ? "Продукты":"Products"}</a> </li>
        <li className="nav-item"> <a className="nav-link" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} href="#news" data-scroll-nav="3">{isRu ? "Новости":"News"}</a> </li>
        <li className="nav-item"> <a className="nav-link" style={scrollPosition > 50 ? {color:"#000"}:{color:"#fff"}} href="#contact" data-scroll-nav="4">{isRu ? "Контакт" : "Contact"}</a> </li>
        <li className="nav-item">
            <div class="form-group lang-select">
                <select value={lang} onChange={(e) => selectLang(e.target.value)} class="form-control mt-1" style={scrollPosition > 50 ? {background:"#fff", color:"#000"}:{background:"transparent", color:"#fff"}}  id="exampleSelect">
                    {
                        allLangs.map((item, index) => (
                            <option key={index} value={item.key} style={{color:"#000"}}>{item.title}</option>
                        ))
                    }
                </select>
            </div>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div className="banner text-center" data-scroll-index='0'>
  <MainSlider isRu={isRu} />
</div>

<div className="about-us section-padding" id='about'>
  <div className="container">
    <div className="row">
      <div className="col-md-12 section-title text-center">
        <h3>We Are Best At Our Work</h3>
        <p>Suspendisse fringilla eget arcu et bibendum. Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p>
        <span className="section-title-line"></span> </div>
      <div className="col-md-6 mb-50">
        <div className="section-info">
          <div className="sub-title-paragraph">
            <h4>You can conquer the world.</h4>
            <h5>If you have right set of mind and thus you can rule the world. Cheers!</h5>
            <p>Nam non erat feugiat, pellentesque mi ut, finibus tellus. Ut eget ex sodales, feugiat elit non, semper ex. Sed laoreet lectus nisl, sit amet porttitor lacus porta nec. Quisque sit amet metus sagittis, tincidunt tellus in, efficitur lorem. Sed scelerisque tellus nisl, eget tincidunt elit aliquet vitae. Integer id felis ut ipsum tristique iaculis. Mauris sed nibh enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sagittis rhoncus sollicitudin. Maecenas eget dui a neque rutrum tincidunt sed non ipsum.</p>
          </div>
          <a href="#" className="anchor-btn">Learn more <i className="fas fa-arrow-right pd-lt-10"></i></a> </div>
      </div>
      <div className="col-md-6 mb-50">
        <div className="section-img"> <img src={require('../images/productus/apples.jpg')} alt="" className="img-responsive"/> </div>
      </div>
    </div>
  </div>
</div>

<Products isRu={isRu} />

<News isRu={isRu} />

<div className="testimonials">
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
</div>

<div className="contact section-padding" id='contact'>
  <div className="container">
    <div className="row">
      <div className="col-md-12 section-title text-center">
        <h3>{isRu ? "Свяжитесь с нами!":"Contact us!"}</h3>
        {/* <p>Vestibulum elementum dui tempus dolor gravida, vel mattis erat fermentum.</p> */}
        <span className="section-title-line"></span> </div>
      <div className="col-lg-5 col-md-4">
        <div className="part-info">
          <div className="info-box">
            <div className="icon"> <i className="fas fa-phone"></i> </div>
            <div className="content">
              <h4>{isRu ? "Телефон" : "Phone"} :</h4>
              <p>930085504</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon"> <i className="fas fa-map-marker-alt"></i> </div>
            <div className="content">
              <h4>{isRu ? "Адрес" : "Address"} :</h4>
              <p>Uzbekistan, Tashkent</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon"> <i className="fas fa-envelope"></i> </div>
            <div className="content">
              <h4>{isRu ? "Почта" : "Mail"} :</h4>
              <p><a href="#">info@123.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-8">
        <div className="contact-form">
          <form className='form' id='contact-form' action="mailto:ahrorsulaymanov2@gmail.com?subject=myform_submission" enctype="text/plain" method='post' data-toggle='validator'>
            <input type='hidden' name='form-name' value='contact-form' />
            <div className="messages"></div>
            <div className="controls">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input id="form_name" type="text" name="name" placeholder={isRu ? "Имя *" : "Name *"} required data-error="name is required." />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input id="form_email" type="email" name="email" placeholder={isRu ? "Почта *" : "Mail *"} required data-error="Valid email is required." />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input id="form_subject" type="text" name="subject" placeholder={isRu ? "Предмет" : "Subject"} />
                  </div>
                </div>
                <div className="col-lg-12 form-group">
                  <textarea id="form_message" name="message" className="form-control" placeholder={isRu ? "Введите ваше сообщение" : "Type Your Message"} rows="4" required data-error="Please,leave us a message."></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="bttn">{isRu ? "Отправить" : "Send Message"}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<footer className="footer-copy">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <p>2022 &copy; PROCESS. Website Designed by <a href="http://t.me/sulaymanov_a" target="_blank" rel="dofollow">Ahror</a></p>
      </div>
    </div>
  </div>
</footer>
<ToTop />
        </>
    )
}
export default MainPage;