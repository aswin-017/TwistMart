import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme';
import '../../assets/css/Header.css';

const Header = () => {
  const { isAuthenticated, firstName, lastName } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/profile');
    }
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1 className="company-name">TWISTMART</h1>
        </div>
        <div className="header-center">
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Categories</span>
          </div>
        </div>
        <div className="header-right">
          <ToggleTheme />
          <button className="profile-icon" onClick={handleProfileClick}>
            <i className="fa fa-user"></i> {isAuthenticated ? `${firstName} ${lastName}` : 'Profile'}
          </button>
          <button className="cart-button" onClick={handleCartClick}>
            <i className="fa fa-shopping-cart"></i> Cart
          </button>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
