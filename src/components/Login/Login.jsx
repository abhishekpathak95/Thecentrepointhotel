import React from 'react';
import { RxAvatar } from "react-icons/rx";
import {toast} from "react-hot-toast";
import "./login.scss";


const Login = () => {
  
  const succ=()=>{
    
    toast.success("login successful");
  }
  
  return (
    <>
      <form action="">
        
        <div>
        <h2>Login</h2>
        <RxAvatar/>
        
          <input type="text" placeholder="enter your name"/>
          <input type="password" placeholder="enter your password"/>
         <button onClick={succ}>submit</button>
        </div>
        
      </form>
    </>
  )
}

export default Login;