import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import ToggleTheme from '../ToggleTheme';
import { useCart } from '../context/CartContext'; // Import useCart hook
import '../../assets/css/Header.css';

const Header = () => {
  const { isAuthenticated, firstName, lastName } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart(); // Access cartItems from CartContext

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      // Store current location to navigate back after login
      localStorage.setItem('prevLocation', '/profile');
      navigate('/login');
    }
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      // Store current location to navigate back after login
      localStorage.setItem('prevLocation', '/cart');
      navigate('/login');
    }
  };

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

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
          {isAuthenticated ? (
            <>
              <button className="profile-icon" onClick={handleProfileClick}>
                <i className="fa fa-user"></i> {`${firstName} ${lastName}`}
              </button>
              <button className="cart-button" onClick={handleCartClick}>
                <i className="fa fa-shopping-cart"></i> Cart {cartItemCount > 0 && `(${cartItemCount})`}
              </button>
            </>
          ) : (
            <button className="profile-icon" onClick={() => navigate('/login')}>
              <i className="fa fa-user"></i> Login
            </button>
          )}
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
