import React, { useState } from "react";
import "./Login.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function Login() {
  const [signIn, setSignIn] = useState(true);
  const handleSignIn = () => {
    setSignIn(true);
  };
  const handleSignUp = () => {
    setSignIn(false);
  };
  return (
    <div className="loginPage">
      <div className="loginPage__left">
        <a href='/'>
        <h1>E-Store</h1>
        </a>
    </div>
      <div className="loginPage__right">
        <button className={`${signIn ? "loginPage__btn active" : "loginPage__btn"}`} onClick={handleSignIn}>
          Sign In
        </button>
        <button className={`${signIn ?"loginPage__btn" : "loginPage__btn active" }`} onClick={handleSignUp}>
          Sign Up
        </button>
       
        <div className="loginPage__content">
          {signIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default Login;
