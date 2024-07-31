import React, { useState, useEffect } from 'react';
import '../../assets/css/card1home.css'; // Make sure the path to the CSS file is correct

const Carousel = () => {
  const slides = [
    {
      id: 1,
      imgUrl: 'https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80',
      alt: 'Slide 1'
    },
    {
      id: 2,
      imgUrl: 'https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80',
      alt: 'Slide 2'
    },
    {
      id: 3,
      imgUrl: 'https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80',
      alt: 'Slide 3'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next slide index
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, 2000); // Change slide every 4 seconds (4000ms)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <ul className="slides">
        {slides.map((slide, index) => (
          <React.Fragment key={slide.id}>
            <input
              type="radio"
              name="radio-buttons"
              id={`img-${slide.id}`}
              checked={index === currentSlide}
              onChange={() => goToSlide(index)}
            />
            <li className="slide-container">
              <div className="slide-image">
                <img src={slide.imgUrl} alt={slide.alt} />
              </div>
              <div className="carousel-controls">
                <label htmlFor={`img-${index === 0 ? slides.length : index}`} className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label htmlFor={`img-${index + 2 > slides.length ? 1 : index + 2}`} className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
          </React.Fragment>
        ))}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <label
              key={index}
              htmlFor={`img-${index + 1}`}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              id={`img-dot-${index + 1}`}
            ></label>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Carousel;
