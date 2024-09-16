import React from 'react';
import { ReactComponent as FacebookIcon } from '../assest/001-facebook.svg';  // Import your SVGs
import { ReactComponent as TwitterIcon } from '../assest/003-twitter.svg';
import { ReactComponent as InstagramIcon } from '../assest/004-instagram.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - Brand */}
        <div className="footer-brand">
          <h2>Next Invest</h2>
          <p>Copyright © 2020. Logipullum. All rights reserved.</p>
        </div>

        {/* Center - Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe to our newsletter</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button type="submit" className="subscribe-btn">
              <span>➤</span>  {/* This can be an SVG or an icon */}
            </button>
          </form>
        </div>

        {/* Right side - Links */}
        <div className="footer-links">
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
              <li>Offline</li>
            </ul>
          </div>

          <div className="footer-about">
            <h4>About</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <FacebookIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
