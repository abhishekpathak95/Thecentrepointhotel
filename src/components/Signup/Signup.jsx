import React from 'react';
import "./signup.scss";
import { toast } from 'react-hot-toast';


const Signup = () => {
 
  const succ=()=>{
    
    toast.success("registration  successful");
  }
  
  return (
    <>
      <form action="">
        
        <div>
        <h2>Registration</h2>
        
        
          <input type="text" placeholder="enter your name"/>
          <input type="email" placeholder="enter your email"/>
          <input type="number" name="" id=""  placeholder='enter your number'/>
          <input type="text" placeholder='set password' />
          <button onClick={succ}>sign up</button>
        </div>
        
      </form>
    </>
  )
}

export default Signup;