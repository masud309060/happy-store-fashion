import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword, 
  signUpnWithEmailAndPassword, 
  singInWithGoogle 
} from '../../redux/action/authenticatinActions';
import { connect } from 'react-redux';


const Login = ({userData, singInWithGoogle, signUpnWithEmailAndPassword , signInWithEmailAndPassword }) => {
  const history = useHistory()
  useEffect(() => {
    if(userData && userData.user && userData.authorise) {
      history.goBack()
    }
  }, [userData.user])

  const [newUser, setNewUser] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(newUser === true && userInfo.email && userInfo.password){
      signUpnWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
    } 
    else if (newUser === false && userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
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
      <div className="error">
          {
            userData.authorise ? <small>Succesfully Sign In</small> :
            <small>{userData.error}</small>
          }
        </div>
      <div className="login_area">
        <form onSubmit={handleSubmit}>
          <h3>{newUser ? "Sign up" : "Sign in"}</h3>
          {
          newUser && 
          <div className="form_div">
            <label htmlFor="name">Name: </label>
            <input onBlur={handleChange} type="name" name="name" id="name" required />
          </div>
          }
          <div className="form_div">
            <label htmlFor="email">Email: </label>
            <input onBlur={handleChange} type="email" name="email" id="email" required />
          </div>
          <div className="form_div">
            <label htmlFor="password">Password:</label>
            <input onBlur={handleChange} type="password" name="password" id="password" minLength={6} required />
          </div>
          <button className="login_btn">
            {newUser ? "Create an account" : "Login"}
          </button>
          <div className="change_login">
            <span>
              {newUser ? "Already have an account?"  : "Create an account?"} {" "}
            </span>
            <span 
            onClick={() => setNewUser(!newUser)} 
            className="change_login_btn"
            >
            {newUser ? "Sign in" : "Sign up"}
            </span>
          </div>
        </form>

        <div className="login_or">or</div>
        <div onClick={singInWithGoogle} className="login_with_google">
          <img src="/images/icon/google.png" alt="google icon"/>
          <span>Sign in with Google</span>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.authentication,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    singInWithGoogle: () => dispatch(singInWithGoogle()),
    signUpnWithEmailAndPassword: (name, email, password) => dispatch(signUpnWithEmailAndPassword(name, email, password)),
    signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
