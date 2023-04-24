import React, { useState } from 'react';
import "./navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1> The centre point</h1>
      </div>
      <div className="menu">
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>about</HashLink>
        <HashLink to={"/#rooms"}>rooms</HashLink>
        <HashLink to={"/#book"}>book</HashLink>
        
        <HashLink to={"/#services"}>services</HashLink>
        <HashLink to={"/#gallery"}>gallery</HashLink>
        <HashLink to={"/#review"}>review</HashLink>
        <Link to={"/contact"}>contact</Link>
      </div>
      <div className="login">
        <Link to={"/login"}>login</Link>
        <div />
        <Link to={"/signup"}>signup</Link>
      </div>
      <div className="smallscreen">
        <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="smallscreen_menu">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
            <div className="smallscreen_links">
            <HashLink to={"/#home"} onClick={() => setToggleMenu(false)}>Home</HashLink>
        <HashLink to={"/#about"} onClick={() => setToggleMenu(false)}>about</HashLink>
        <HashLink to={"/#rooms"} onClick={() => setToggleMenu(false)}>rooms</HashLink>
        <HashLink to={"/#book"} onClick={() => setToggleMenu(false)}>book</HashLink>
        
        <HashLink to={"/#services"} onClick={() => setToggleMenu(false)}>services</HashLink>
        <HashLink to={"/#gallery"} onClick={() => setToggleMenu(false)}>gallery</HashLink>
        <HashLink to={"/#review"} onClick={() => setToggleMenu(false)}>review</HashLink>
        <Link to={"/contact"} onClick={() => setToggleMenu(false)}>contact</Link>
              <Link to={"/login"} onClick={() => setToggleMenu(false)}>login</Link>
              <Link to={"/signup"} onClick={() => setToggleMenu(false)}>signup</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;