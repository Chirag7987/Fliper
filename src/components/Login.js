import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  // Change 'username' to 'email'
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: credentials.email,
        password: credentials.password
      });
  
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/admin';
  
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Error logging in. Please try again.');
      console.error('Login error:', error);
    }
  };
  

  return (
    <div className="login">
      <h1>Admin Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Changed 'username' to 'email' */}
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          value={credentials.email} 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          value={credentials.password} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
