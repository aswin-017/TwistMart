import React from 'react';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
        <div className="col">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Sunflower Oils</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">
              Wheat Atta</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">
              Leafy Vegetables</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">
              Health Drinks</a></li>
              <li><a href="http://scanfcode.com/category/android/">
              Flakes</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Floor Cleaners</a></li>
            </ul>
          </div>

          <div className="col">
            <h6>Popular Brands</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Amul</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Nescafe</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">MTR</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">McCain</a></li>
              <li><a href="http://scanfcode.com/category/android/">Lay's</a></li>
              <li><a href="http://scanfcode.com/category/templates/">REDBULL</a></li>
            </ul>
          </div>

          <div className="col">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
            Copyright © 2023-2025 Supermarket Grocery Supplies Pvt Ltd
              <a href="#"> Scanfcode</a>.
            </p>
          </div>

          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
