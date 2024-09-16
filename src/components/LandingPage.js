import React from 'react';
import ChartSection from './ChartSection';
import './LandingPage.css';
import { ReactComponent as Logo1 } from '../assest/10.svg';
import { ReactComponent as Logo2 } from '../assest/11.svg';
import { ReactComponent as Logo3 } from '../assest/12.svg';
import { ReactComponent as Logo4 } from '../assest/7.svg';
import { ReactComponent as Logo5 } from '../assest/8.svg';
import { ReactComponent as Logo6 } from '../assest/9.svg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content"> 
          <h1>Meaningful investments in Main Street businesses</h1>
          <p>Browse vetted investment offerings in communities all over the US.</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerings-section">
        <h2>Offerings open for investment</h2>
        <p>Explore pre-vetted investment opportunities available in a growing number of industry categories.</p>

        <div className="investment-cards">
          {/* First card */}
          <div className="investment-card">
          <Logo1 className="svg-logo" alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <p className="raised">$574,920 raised of $1,000,000</p>
              <button className="view-btn">View</button>
            </div>
          </div>

          {/* Second card */}
          <div className="investment-card highlighted">
          <Logo2 className="svg-logo" alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <div className="card-info">
                <p>Security Type: <span>Revenue Sharing Note</span></p>
                <p>Investment Multiple: <span>1.4x</span></p>
                <p>Maturity: <span>48 Months</span></p>
                <p>Min. Investment: <span>$100</span></p>
              </div>
              <button className="view-btn highlight">View</button>
            </div>
          </div>

          {/* Third card */}
          <div className="investment-card">
          <Logo3 className="svg-logo" id='logo-3' alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <p className="raised">$574,920 raised of $1,000,000</p>
              <button className="view-btn">View</button>
            </div>
          </div>

          {/* Fourth card */}
          <div className="investment-card">
          <Logo4 className="svg-logo" alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <p className="raised">$574,920 raised of $1,000,000</p>
              <button className="view-btn">View</button>
            </div>
          </div>

          {/* Fifth card */}
          <div className="investment-card">
          <Logo5 className="svg-logo" alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <p className="raised">$574,920 raised of $1,000,000</p>
              <button className="view-btn">View</button>
            </div>
          </div>

          {/* Sixth card */}
          <div className="investment-card">
          <Logo6 className="svg-logo" alt="Oxalis" />  {/* SVG as a React Component */}
            <div className="card-content">
              <h3>Oxalis</h3>
              <p className="location">Brooklyn, NY</p>
              <p className="description">A recognized leader in language immersion & early education, opening second school.</p>
              <p className="raised">$574,920 raised of $1,000,000</p>
              <button className="view-btn">View</button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections (Similar to image) */}
      <section className="summary-section">
        <h2>$7M+ paid out to investors</h2>
        <p>Next Invest has already paid out over $7M in cash returns to investors.</p>
        {/* Chart and other contents can be added here */}
      </section>

      <section className="cta-section">
        <h2>Looking to raise capital for your growing business?</h2>
        <p>We make it easy to raise money from thousands of local investors.</p>
        <button className="cta-btn">Apply Online</button>
      </section>
      <ChartSection />
    </div>
  );
};

export default LandingPage;
