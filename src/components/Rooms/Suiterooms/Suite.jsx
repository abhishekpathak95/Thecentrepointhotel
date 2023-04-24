import React from 'react';
import d3 from "../../../assets/7.jpg";
import "../Suiterooms/uite.scss";
import { Link } from 'react-router-dom';

const Suite = () => {
  return (
    <div className="queen">
      <h1> queen size Rooms</h1>
      <div className="d3">
        <img src={d3} alt="d3" />
        <div>
          <p>
            A room that gives you the real feeling of excitement and complete
            satisfaction, equipped with the most reliable and contemporary
            facilities, giving you a fantastic experience - all your dreams
            cherished in a single place!
          </p>
          <p>
            Our Suite rooms are designed in a minimalist style having a rustic
            appeal with its wooden finish and plush furnishings. Explore a world
            of convenience, personalized service and the superb luxuries of our
            Suite.
          </p>
          <p>
            A fresh and relaxed every day morning will amuse you in every way! A
            perfect place to catch up with your friends or organize business
            meetings. You can also relax and unwind, or host an evening cocktail
            party with friends. With 3 numbers up to 455 square feet each to
            enjoy, our suites provide a spacious retreat for whatever your heart
            desires.
          </p>
        </div>
      </div>
      <Link to={"/contact"}>book now</Link>
    </div>
  );
}

export default Suite;