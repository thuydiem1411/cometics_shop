import "./navbar.css";
import { useState } from "react";
import Logo from "../Image/new-ren-logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { links } from "../pages/data";
import Dropdown from "./Dropdown";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <nav>
      <Marquee />
      <div className="container container__navbar">
        <div className="nav__logo">
          <Link to="/" className="logo">
            <img src={Logo} alt="Nav logo" />
          </Link>
        </div>
        <div className="dropdown">
          <Dropdown />
        </div>
        <div className="nav__icon">
          <div className="nav__items">
            <a href="/" className="active">
              <IoSearchOutline />
            </a>
            <a href="/" className="active">
              <IoPersonCircleSharp />
            </a>
            <a href="/" className="active">
              <FaBagShopping />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
