import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../../assets/css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleDropdownOpen = () => {
    setDropdownIsOpen(true);
  };

  const handleDropdownClose = () => {
    setDropdownIsOpen(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/" className="navbar-link">About</Link></li>
          <li
            className="navbar-item"
            onMouseOver={handleDropdownOpen}
            onMouseOut={handleDropdownClose}
          >
            <a href="#" className="dropdown-toggler">
              Categories <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <ul
              ref={dropdownRef}
              className={`dropdown ${dropdownIsOpen ? 'show' : ''}`}
              id="categories"
            >
              <li><Link to="/fruits" className="dropdown-item">Fruits & Vegetables</Link></li>
              <li><Link to="/foodgrains" className="dropdown-item">FoodGrains, Oil & Masala</Link></li>
              <li><Link to="/bakery" className="dropdown-item">Bakery, Cakes & Dairy</Link></li>
              <li><Link to="/beverages" className="dropdown-item">Beverages</Link></li>
              <li><Link to="/snacks" className="dropdown-item">Snacks & Branded Foods</Link></li>
              <li><Link to="/beauty" className="dropdown-item">Beauty & Hygiene</Link></li>
              <li><Link to="/cleaning" className="dropdown-item">Cleaning & Household</Link></li>
              <li><Link to="/kitchen" className="dropdown-item">Kitchen, Garden & Pets</Link></li>
              <li><Link to="/eggs" className="dropdown-item">Eggs, Meat & Fish</Link></li>
              <li><Link to="/gourmet" className="dropdown-item">Gourmet & World Food</Link></li>
              <li><Link to="/baby" className="dropdown-item">Baby Care</Link></li>
            </ul>
          </li>
          <li className="navbar-item"><Link to="/products" className="navbar-link">Products</Link></li>
          <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
          {isAuthenticated ? (
            <li className="navbar-item"><button onClick={handleLogout} className="navbar-link logout-button">Logout</button></li>
          ) : (
            <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
