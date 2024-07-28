import React from 'react';
import '../../assets/css/card1home.css'; // Make sure the path to the CSS file is correct

const Carousel = () => {
  return (
    <div className="carousel">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80" alt="Slide 1" />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-3" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-2" />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80" alt="Slide 2" />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-3" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <input type="radio" name="radio-buttons" id="img-3" />
        <li className="slide-container">
          <div className="slide-image">
            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80" alt="Slide 3" />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-2" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-1" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>
        <div className="carousel-dots">
          <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
          <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
          <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
        </div>
      </ul>
    </div>
  );
};

export default Carousel;