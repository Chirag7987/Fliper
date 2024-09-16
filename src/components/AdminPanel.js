import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  const [offering, setOffering] = useState({
    tag: '',
    cardImage: '',
    title: '',
    location: '',
    description: '',
    totalPrice: '',
    getPrice: '',
    securityType: '',
    investmentMultiple: '',
    maturity: '',
    minInvestment: ''
  });

  const handleChange = (e) => {
    setOffering({ ...offering, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the JWT token from localStorage
    const token = localStorage.getItem('token');

    // Send a POST request to add a new offering
    axios.post(
      'http://localhost:5000/api/admin/offerings',
      offering,
      {
        headers: {
          'x-auth-token': token  // Add token to request headers
        }
      }
    )
    .then(response => {
      console.log('Offering added successfully:', response.data);
      // Reset form or do any other action after success
    })
    .catch(error => {
      console.error('Error adding offering:', error);
      // Handle error
    });
  };

  return (
    <div>
      <h1>Admin Panel - Add Offering</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tag"
          placeholder="Tag"
          value={offering.tag}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cardImage"
          placeholder="Card Image URL"
          value={offering.cardImage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={offering.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={offering.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={offering.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="totalPrice"
          placeholder="Total Price"
          value={offering.totalPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="getPrice"
          placeholder="Get Price"
          value={offering.getPrice}
          onChange={handleChange}
        />
        <input
          type="text"
          name="securityType"
          placeholder="Security Type"
          value={offering.securityType}
          onChange={handleChange}
        />
        <input
          type="text"
          name="investmentMultiple"
          placeholder="Investment Multiple"
          value={offering.investmentMultiple}
          onChange={handleChange}
        />
        <input
          type="text"
          name="maturity"
          placeholder="Maturity"
          value={offering.maturity}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minInvestment"
          placeholder="Minimum Investment"
          value={offering.minInvestment}
          onChange={handleChange}
        />
        <button type="submit">Add Offering</button>
      </form>
    </div>
  );
};

export default AdminPanel;
