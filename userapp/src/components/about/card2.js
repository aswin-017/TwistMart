// src/components/card2.js

import React from 'react';
import Slider from 'react-slick';
import '../../assets/css/card2.css'; // Ensure to import the CSS file

const PartnersCarousel = () => {
  // Configuration settings for the Slider component
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  // Array of image URLs for the slides
  const slides = [
    'https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg',
    'https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg',
    'https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg',
    'https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg',
    'https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg',
    'https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg',
    'https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg'
  ];

  return (
    <div className="container">
      <h2>Our Partners</h2>
      <Slider {...settings} className="customer-logos">
        {slides.map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Partner ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
