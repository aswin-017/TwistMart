import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed
import '../../assets/css/Login.css';

const ProductPartnerLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Placeholder function for login action
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add any form validation or mock login logic
    // For now, we just set authentication state and navigate to homepage
    login(); // Update the authentication state
    navigate('/'); // Redirect to the homepage after login
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <button onClick={handleHome} className="home-button">
        Home
      </button>
      <div className="login-box">
        <h2>Product Partner Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPartnerLogin;
