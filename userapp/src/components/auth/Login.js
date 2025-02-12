// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure the login function from useAuth hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        const { userId, firstName, lastName } = userData;
        login(userId, firstName, lastName); // Call login function from context
        toast.success('Login successful!');
        
        // Navigate to previous page or /profile if no previous page
        const previousPath = localStorage.getItem('previousPath') || '/profile';
        localStorage.removeItem('previousPath');
        navigate(previousPath);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
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
        <h2>Login</h2>
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
        <div className="signup-box">
          <p>Don't have an account?</p>
          <button onClick={handleSignup} className="signup-button">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
