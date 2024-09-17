import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';


const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success message

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', user);

      if (response.data) {
        setSuccess('Registration successful! You can now log in.');
        setUser({
          name: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Error registering user.');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
