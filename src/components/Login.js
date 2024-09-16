import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
