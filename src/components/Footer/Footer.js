import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span>All Right is reserved &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;