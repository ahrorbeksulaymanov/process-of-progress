import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";
import useScrollTop from "../customHooks/useScroll";
import logo from "../images/process-logo_mini.png";
import { FaBars } from "react-icons/fa";

const MyHeader = ({ isRu, allLangs, lang, setLang }) => {
  const scrollPosition = useScrollTop();
  const [isOpen, setIsOpen] = useState(false);

  const selectLang = (e) => {
    setLang(e);
    localStorage.setItem("lang", e);
  };

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      
      <Navbar
        expand="lg"
        container
        className={scrollPosition > 50 ? "header-blur" : ""}
      >
        
        <NavbarBrand href="/">
          <a className="navbar-brand navbar-logo" href="#">
            <img
              src={logo}
              style={{ width: "150px" }}
              alt="logo"
              className="logo-1"
            />
          </a>
        </NavbarBrand>
        <NavbarToggler
          style={scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }}
          onClick={toggle}
        >
          <FaBars
            style={scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }}
          />
        </NavbarToggler>
        <Collapse
          style={scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }}
          isOpen={isOpen}
          navbar
        >
          <Nav className="ms-auto-custom" navbar>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={
                    scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }
                  }
                  href="#"
                  data-scroll-nav="0"
                  onClick={() => setIsOpen(false)}
                >
                  {isRu ? "Главный" : "Home"}
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  style={
                    scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }
                  }
                  href="#about"
                  data-scroll-nav="1"
                  onClick={() => setIsOpen(false)}
                >
                  {isRu ? "О нас" : "About us"}
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  style={
                    scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }
                  }
                  href="#products"
                  data-scroll-nav="2"
                  onClick={() => setIsOpen(false)}
                >
                  {isRu ? "Продукты" : "Products"}
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  style={
                    scrollPosition > 50 ? { color: "#000" } : { color: "#fff" }
                  }
                  href="#contact"
                  data-scroll-nav="4"
                  onClick={() => setIsOpen(false)}
                >
                  {isRu ? "Контакт" : "Contact"}
                </a>{" "}
              </li>
              <li className="nav-item">
                <div className="form-group lang-select">
                  <select
                    value={lang}
                    onChange={(e) => selectLang(e.target.value)}
                    className="form-control mt-1"
                    style={
                      scrollPosition > 50
                        ? { background: "#fff", color: "#000" }
                        : { background: "transparent", color: "#fff" }
                    }
                    id="exampleSelect"
                  >
                    {allLangs.map((item, index) => (
                      <option
                        key={index}
                        value={item.key}
                        style={{ color: "#000" }}
                      >
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default MyHeader;
