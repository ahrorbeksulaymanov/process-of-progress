import React from "react";
import useScrollTop from "../customHooks/useScroll";
import { BsArrowUpShort } from "react-icons/bs";

const ToTop = () => {
  const scrollPosition = useScrollTop();

  return (
    <a
      href="#"
      className={scrollPosition > 250 ? `d-block to-top` : "d-none to-top"}
    >
      <BsArrowUpShort style={{ color: "#fff", fontSize: "36px" }} />
    </a>
  );
};
export default ToTop;
