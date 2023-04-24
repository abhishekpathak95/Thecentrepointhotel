import React from "react";
import "./footer.scss";
import {SiGooglemaps} from "react-icons/si"
import {BiPhone} from "react-icons/bi";
import {MdOutlineEmail} from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
      <div className="left">
        <SiGooglemaps/>
        <p>
          286, Rajiv Gandhi Salai OMR,
          <br /> Sholinganallur Chennai 600 119
        </p>
      </div>
      <div className="mid">
        <BiPhone/>
        <p>+91 44 4650 9000 F: +91 44 4650 9099</p>
      </div>
      <div className="right">
        <MdOutlineEmail/>
        <p>mail@hotelcentrepoint.co.in</p>
      </div>
      
      </div>
      <p>copyright@abhishek2023Allrightsreserved</p>
    </footer>
    
    </>
  );
};

export default Footer;
