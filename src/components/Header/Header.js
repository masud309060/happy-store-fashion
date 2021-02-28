import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
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
            <Link to="/login">Sign in</Link>
          </span>
          <span>
            <Link to="/admin">Admin</Link>
          </span>
        </div>
    </div>
  );
};

export default Header;