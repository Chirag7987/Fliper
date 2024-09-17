import React, { useState } from 'react';
import axios from 'axios';

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

  // Styles object
  const styles = {
    container: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s',
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      height: '100px',
      resize: 'vertical',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Panel - Add Offering</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="tag"
          placeholder="Tag"
          value={offering.tag}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="cardImage"
          placeholder="Card Image URL"
          value={offering.cardImage}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={offering.title}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={offering.location}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={offering.description}
          onChange={handleChange}
          style={styles.textarea}
        />
        <input
          type="number"
          name="totalPrice"
          placeholder="Total Price"
          value={offering.totalPrice}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="getPrice"
          placeholder="Get Price"
          value={offering.getPrice}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="securityType"
          placeholder="Security Type"
          value={offering.securityType}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="investmentMultiple"
          placeholder="Investment Multiple"
          value={offering.investmentMultiple}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="maturity"
          placeholder="Maturity"
          value={offering.maturity}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="minInvestment"
          placeholder="Minimum Investment"
          value={offering.minInvestment}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Offering</button>
      </form>
    </div>
  );
};

export default AdminPanel;
