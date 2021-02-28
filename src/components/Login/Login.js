import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    authorise: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("click")
  }
  
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
    console.log(userInfo)
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" 
        src="/images/icon/happy-store.png" 
        alt="happy-store logo" 
        height="80"
        />
      </Link>
      <div className="login_area">
        <form onSubmit={handleSubmit}>
          <h3>{showSignUp ? "Sign up" : "Sign in"}</h3>
          {
          showSignUp && 
          <div className="form_div">
            <label htmlFor="name">Name: </label>
            <input onBlur={handleChange} type="name" name="name" id="name" required />
            <span className="input_error"></span>
          </div>
          }
          <div className="form_div">
            <label htmlFor="email">Email: </label>
            <input onBlur={handleChange} type="email" name="email" id="email" required />
            <span className="input_error"></span>
          </div>
          <div className="form_div">
            <label htmlFor="password">Password:</label>
            <input onBlur={handleChange} type="password" name="password" id="password" minLength={6} required />
            <span className="input_error"></span>
          </div>
          <button className="login_btn">
            {showSignUp ? "Create an account" : "Login"}
          </button>
          <div className="change_login">
            <span>
              {showSignUp ? "Already have an account?"  : "Create an account?"} {" "}
            </span>
            <span 
            onClick={() => setShowSignUp(!showSignUp)} 
            className="change_login_btn"
            >
            {showSignUp ? "Sign in" : "Sign up"}
            </span>
          </div>
        </form>
        <div className="login_or">or</div>
        <div className="login_with_google">
          <img src="/images/icon/google.png" alt="google icon"/>
          <span>Sign in with Google</span>
        </div>
      </div>

    </div>
  );
};

export default Login;