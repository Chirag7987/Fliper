import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assest/4.svg';  // Import the SVG logo
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
      <Link to="/">
          <Logo className="logo-svg" />  {/* Using the SVG as a React component */}
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Investment Opportunities</Link>
        </li>
        <li>
          <Link to="/how-it-works">How it works</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="navbar-auth">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
