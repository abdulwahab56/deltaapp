import React, { useState } from "react";
import { FaRProject } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
// import { IconContext } from "react-icons";
import { useLocation, Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { data } from "../../data/NavbarData";
import "../Navbar/NavBar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let location = useLocation();
  const handleClick = () => {
    setShow(!show);
  };
  // const closeMobileMenu = (to, id) => {
  //   if (id && location.pathname === "/") {
  //     // scrollTo(id);
  //   }

  // };
  return (
    <div
      className={`nav ${
        location.pathname === "/pricing" || location.pathname == "/signup"
          ? "navbackgroudclr"
          : ""
      }`}
    >
      <div className="navbar_logo">
        <img src={logoImg} alt="logo" className="navbar_img" />
        <span> Delta</span>
      </div>

      <ul className={show ? "nav-list active" : "navbar_menu"}>
        {data.map((el, index) => {
          return (
            <li key={index}>
              <Link
                className="nav_tag"
                to={el.to}
                // onClick={() => closeMobileMenu(el.to, el.id)}
              >
                {el.text}
              </Link>
            </li>
          );
        })}
        {/* <li className="nav_tag">About</li>
        <li className="nav_tag">pricing</li>
        <li className="nav_tag">Contant</li> */}
      </ul>
      <div className="mobile_icon" onClick={handleClick}>
        {show ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <CgMenuRight size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
