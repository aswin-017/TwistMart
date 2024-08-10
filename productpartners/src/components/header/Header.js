import React from 'react';
import { useNavigate } from 'react-router-dom';

import ToggleTheme from '../ToggleTheme';
import '../../assets/css/Header.css';
import Navbar from './Navbar';

const Header = () => {
  const navigate = useNavigate();

  const handlePartnerWithUsClick = () => {
    navigate('/partner-with-us');
  };

  const handleLoginClick = () => {
    navigate('/product-partner-login');
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1 className="company-name">TWISTMART</h1>
        </div>

        <div className="header-right">
          <ToggleTheme />
          {/* Partner With Us Button */}
          <button className="header-button" onClick={handlePartnerWithUsClick}>
            Partner With Us
          </button>
          {/* Login Button */}
          <button className="header-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
