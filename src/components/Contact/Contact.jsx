import React from "react";

import "./contact.scss";
import { toast } from "react-hot-toast";

const contact = () => {
  const succ=()=>{
    toast.success("hotel booked")
  }
  return (
    <>
      <form action="">
        <div>
          <input type="text" placeholder="enter your name"/>
          <input type="email" placeholder="enter your email"/>
          <input type="number"  placeholder="enter your phone number"/>
          <textarea name="" id="" cols="30" rows="5">enter message</textarea>
          <button onClick={succ}>submit</button>
        </div>
        
      </form>
    </>
  );
};

export default contact;
