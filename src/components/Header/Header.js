import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/action/authenticatinActions';
import { connect } from 'react-redux';

const Header = ({ signOut, userData }) => {
  return (
    <div className="home_header">
        <Link to="/">
          <img src="/images/icon/happy-store.png" alt="logo" height="70"/>
        </Link>
        <div className="nav_section">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/orders">Orders</Link>
          </span>
          <span>
            {
              userData.authorise ? <Link to="/" onClick={signOut}>
                <div className="login_nav">
                  <p>Sign out, {" "}</p>
                  <small>{userData.user?.displayName}</small>
                </div>
                </Link> :
              <Link to="/login">Sign in</Link>
            }
          </span>
          <span>
            <Link to="/admin">Admin</Link>
          </span>
        </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.authentication
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);