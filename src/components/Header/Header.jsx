import React from "react";
import {  motion } from "framer-motion";
import {MdSingleBed} from "react-icons/md";
import {MdHotelClass} from "react-icons/md";
import {FaHotel} from "react-icons/fa";
import {BiHotel} from "react-icons/bi";
import p1 from "../../assets/people01.png";
import p2 from "../../assets/people02.png";
import p3 from "../../assets/people03.png";
import about from "../../assets/photo.jpg";
import img1 from "../../assets/deluxe.png";
import img2 from "../../assets/double-deluxe2.png";
import img3 from "../../assets/suite2.png";
import vids from "../../assets/vid.mp4";
import g1 from "../../assets/1.jpg";
import g2 from "../../assets/2.jpg";
import g3 from "../../assets/3.jpg";
import g4 from "../../assets/4.jpg";
import g5 from "../../assets/5.jpg";
import g6 from "../../assets/6.jpg";
import g7 from "../../assets/7.jpg";
import g8 from "../../assets/8.jpg";
import g9 from "../../assets/9.jpg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const animationss = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };
  const animation3={
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    review1: {
      opacity: 0,
      x: "-50%",
    },
    review2: {
      opacity: 0,
      y: "-50%",
    },
    review3: {
      opacity: 1,
      x: "10%",
    },
  }

  
  const animations = {
    h3: {
      initial: {
        y: "-200%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
    h1: {
      initial: {
        y: "-200%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
      <div className="header" id="home">
        <motion.h3 {...animations.h3}>
          <i>A Classic Hotel And We Like To Keep It That Way!</i>
        </motion.h3>
        <motion.h1 {...animations.h1}>the center point </motion.h1>
      </div>
      <div id="about">
        <h1>Brand Essence</h1>
        <div className="mid">
          <img src={about} alt="about"  />
          <div className="info">
            <p>
              Hotel The Centrepoint is a new age Hotel that focuseson service
              because we hire and train for a culture and provide extraordinary
              experience, so that every customer is WOWed.
            </p>
            <p>
              In the commercial IT hub of Chennai, welcoming you to enjoy our
              first class amenities, personalized attention and the splendid
              bedding that affords you to understand the meaning of real
              comfort. An affordable luxury of your choice; an invite to relish
              the comfort that you desire for…..!!!
            </p>
          </div>
        </div>
        <button>read more</button>
      </div>
      <div id="rooms">
        <h1>Rooms</h1>
        <div className="one">
          <img src={img1} alt="img1" />
          <div>
            <h2>Deluxe Queen Size Rooms</h2>
            <p>
              A splendid room absolutely stunning for a holiday break! Our
              Hotel's Deluxe Queen Size Room will render you an unraveling
              holiday experience.
            </p>
            <Link to={"/delux"}>view details</Link>
          </div>
        </div>
        <div className="two">
          <div>
            <h2> Double Deluxe Rooms</h2>
            <p>
              A magnificent room, just right for your family to enjoy a
              pacifying holiday. The room will consistently meet your
              satisfaction for hotel room comfort and make your stay pleasant
              and restful.
            </p>
            <Link to={"/queen"}>view more</Link>
          </div>
          <img src={img2} alt="img2" />
        </div>
        <div className="three">
          <img src={img3} alt="img3" />
          <div>
            <h2>suit Rooms</h2>
            <p>
              A room that gives you the real feeling of excitement and complete
              satisfaction, equipped with the most reliable and contemporary
              facilities, giving you a fantastic experience - all your dreams
              cherished in a single place!</p>
            <Link to={"/suite"}>view more</Link>
          </div>
        </div>
      </div>
      <div id="book">
        <h1>book a room now</h1>
        <video src={vids} controls autoPlay muted></video>
        <Link to={"/contact"}>book now</Link>
      </div>

      <div id="services">
        <h2>Services</h2>
        <section>
          <motion.div
            className="serviceBox1"
            whileInView={animationss.whileInView}
            initial={animationss.one}
          >
            <BiHotel />
            <h2>famous theory</h2>
            <p>
              24/7 multi-cuisine restaurant, serves culinary delights round the
              clock to delight your taste buds
            </p>
          </motion.div>
          <motion.div
            className="serviceBox2"
            whileInView={animationss.whileInView}
            initial={animationss.twoAndThree}
          >
            <FaHotel />
            <h2>urban lounge</h2>
            <span>
              Cosy Lounge bar services cool combination of fluid and music with
              in house DJ on weekdays
            </span>
          </motion.div>
          <motion.div
            className="serviceBox3"
            whileInView={animationss.whileInView}
            initial={animationss.twoAndThree}
            transition={{
              delay: 0.2,
            }}
          >
            <MdHotelClass />
            <h2>blue marlin</h2>
            <span>
              Enjoy our new variety of seafood with cityview at rooftop
              restaurant
            </span>
          </motion.div>
          <motion.div
            className="serviceBox4"
            whileInView={animationss.whileInView}
            initial={animationss.four}
          >
            <MdSingleBed />
            <h2>awesome stay</h2>
            <span>
              {" "}
              Cosy Lounge bar services cool combination of fluid and music with
              in house DJ on weekdays
            </span>
          </motion.div>
        </section>
      </div>
      <div id="gallery">
        <h2>gallery</h2>
        <div className="gallery1">
          <img src={g1} alt="g1" />
          <img src={g2} alt="g2" />
          <img src={g3} alt="g3" />
          <img src={g4} alt="g4" />
          <img src={g5} alt="g5" />
          <img src={g6} alt="g6" />
          <img src={g7} alt="g7" />
          <img src={g8} alt="g8" />
          <img src={g9} alt="g9" />
        </div>
      </div>
      <div id="review">
        <h1>review</h1>
        <div className="rr">
        <motion.div className="review1" whileInView={animation3.whileInView}
            initial={animation3.review1}>
          <img src={p1} alt="p1" />
          <h2>siri</h2>
          <p>
            located in prime location in chennai,on of the best hotels across
            city.rooms are clean,ambience are great,food is awesome.staff
            behaviour is proffessional
          </p>
        </motion.div>
        <motion.div className="review2" whileInView={animation3.whileInView}
            initial={animation3.review2}>
          <img src={p2} alt="p2" />
          <h2>Alex</h2>
          <p>
            quality food with quality dininig,love to visit again.afoordable
            pricing ,luxurous as well.food is awesome,so many iconic places
            nearby.
          </p>
        </motion.div>
        <motion.div className="review3" whileInView={animation3.whileInView}
            initial={animation3.review3}>
          <img src={p3} alt="p3" />
          <h2>John</h2>
          <p>
            love the hospitality of staff,they are always reay to help.apart
            from that food quality and rooms are awesome,love to visit
            again.they welcome customer very nicely.
          </p>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
