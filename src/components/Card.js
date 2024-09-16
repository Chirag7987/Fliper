import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.imageUrl} alt={data.title} className="card-image" />
      <div className="card-details">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <ul>
          <li>Location: {data.location}</li>
          <li>Total Price: {data.totalPrice}</li>
          <li>Security Type: {data.securityType}</li>
          <li>Investment Multiple: {data.investmentMultiple}</li>
          <li>Maturity: {data.maturity}</li>
          <li>Min. Investment: {data.minInvestment}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
