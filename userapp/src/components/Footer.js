import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">About Twistmart</h3>
            <p>
              Twistmart is your go-to hypermarket for all your grocery needs. We connect you with various shops, offering the best products at competitive prices.
            </p>
          </div>
          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <p>Email: support@twistmart.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Twistmart Street, Hypermarket City, HM 12345</p>
          </div>
          <div className="footer-section social">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="social-icons">
              <li>
                <Link className="facebook" to="https://www.facebook.com/twistmart">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link className="instagram" to="https://www.instagram.com/twistmart">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link className="google" to="mailto:support@twistmart.com">
                  <i className="fa-brands fa-google"></i>
                </Link>
              </li>
              <li>
                <Link className="linkedin" to="https://www.linkedin.com/company/twistmart">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Twistmart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;