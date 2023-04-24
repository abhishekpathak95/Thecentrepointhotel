import React from 'react';
import d2 from "../../../assets/double-deluxe2.png";
import "../queen/queen.scss";
import { Link } from 'react-router-dom';

const Queen = () => {
  return (
    <div className="queen">
      <h1> Double Delux Rooms</h1>
      <div className="d2">
        <img src={d2} alt="d2" />
        <div>
          <p>
            A magnificent room, just right for your family to enjoy a pacifying
            holiday. The CentrePoint's Deluxe Twin Room will consistently meet
            your satisfaction for hotel room comfort and make your stay pleasant
            and restful.
          </p>
          <p>
            The aura of the room is so calm and beautiful that it makes you feel
            magical - a perfect blend of joy and tranquility that comforts you
            throughout during your stay in our hotel. We have set the room with
            utmost diligence, bearing in mind that your preference is the key
            factor. We guarantee that in every possible way we have ensured to
            frame the high standards of safety and has aimed for a world class
            quality.
          </p>
          <p>
            There are 9 Deluxe Twin Rooms designed in a minimalistic style,
            having a rustic appeal with its wooden finish and plush furnishings
            on an area of 203 square feet each with a queen size bed and
            comfortable mattress. We guarantee that our duvets are laundered
            fresh for each new arrival.
          </p>
        </div>
      </div>
      <Link to={"/contact"}>book now</Link>
    </div>
  );
}

export default Queen;