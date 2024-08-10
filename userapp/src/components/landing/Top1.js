// CardCarousel.js
import React from 'react';
import Slider from 'react-slick';
import '../../../assets/css/user/landing/Top1.css'; // Assuming this is your CSS file for styling

// CardCarousel.js
 // Ensure this CSS file has styles for card-carousel

const ProductCard = ({ image }) => {
  return (
    <div className="product-card">
      <img src={image} alt="Product" />
    </div>
  );
};

const Top1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 cards per row
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722497873_mum.jpg?im=Resize=(768,448)"
        />
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722425744_riceatta.jpg?im=Resize=(768,448)"
        />
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722681127_Mumbai.jpg?im=Resize=(768,448)"
        />
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722690170_mum.jpg?im=Resize=(768,448)"
        />
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722582168_Milk_Maharastra-2.jpg?im=Resize=(768,448)"
        />
        <ProductCard
          image="https://www.jiomart.com/images/cms/aw_rbslider/slides/1722335426_OnePlus_Nord_CE3_Lite_5G.jpg?im=Resize=(768,448)"
        />
        {/* Add more ProductCard components as needed */}
      </Slider>
    </div>
  );
};

export default Top1;