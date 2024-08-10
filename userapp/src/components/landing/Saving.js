import React from 'react';
import Slider from 'react-slick';
import '../../../assets/css/user/landing/Saving.css'; // Assuming this is your CSS file for styling


const Card = ({ image, offer, title, price, onWishlistToggle, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt="Product" />
      {offer && <div className="offer">{offer}</div>}
      <div className="heart-icon" onClick={onWishlistToggle}>
        ♥
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{price}</p>
        <button className="add-to-cart" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,  // Show 6 cards per row
    slidesToScroll: 1,
    centerMode: false,  // No center mode to fit 6 cards in view
    variableWidth: false,  // Card width is fixed
    // prevArrow: <button className="slick-prev">←</button>,
    // nextArrow: <button className="slick-next">→</button>,
  };

  const handleWishlistToggle = () => {
    // Handle wishlist toggle logic
    console.log('Wishlist toggled');
  };

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log('Added to cart');
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <Card
          image="https://www.jiomart.com//images/product/original/490001992/brooke-bond-red-label-strong-blend-tea-1-kg-product-images-o490001992-p490001992-0-202304281622.jpg?im=Resize=(310,310)"
          offer="20% Off"
          title="Brooke Bond Red Label Strong Blend Tea 1 kg"
          price="₹229.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        <Card
          image="https://www.jiomart.com//images/product/original/491055460/colgate-strong-teeth-saver-pack-toothpaste-250-g-pack-of-2-product-images-o491055460-p491055460-0-202406071929.jpg?im=Resize=(310,310)"
          offer="10% Off"
          title="Colgate Strong Teeth Saver Pack Toothpaste 250 g Pack of 2"
          price="₹150.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        <Card
          image="https://www.jiomart.com//images/product/original/490009614/lotte-creamfilled-choco-pie-28-g-pack-of-12-product-images-o490009614-p490009614-0-202203170648.jpg?im=Resize=(310,310)"
          offer="15% Off"
          title="Lotte Creamfilled Choco Pie 28 g Pack of 12"
          price="₹180.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        <Card
          image="https://www.jiomart.com//images/product/original/490001537/nestle-milkmaid-condensed-milk-380-g-tin-product-images-o490001537-p490001537-0-202211151711.jpg?im=Resize=(310,310)"
          offer="25% Off"
          title="Nestle Milkmaid Condensed Milk 380 g Tin"
          price="₹120.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        <Card
          image="https://www.jiomart.com//images/product/original/490001392/amul-butter-500-g-carton-product-images-o490001392-p490001392-0-202203152128.jpg?im=Resize=(310,310)"
          offer="30% Off"
          title="Amul Butter 500 g Carton The taste of India"
          price="₹250.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        <Card
          image="https://www.jiomart.com//images/product/original/490005648/saffola-gold-multisource-blended-refined-edible-oil-5-l-can-1-l-free-pouch-product-images-o490005648-p490005648-0-202407121730.jpg?im=Resize=(310,310)"
          offer="40% Off"
          title="Saffola Gold Multisource Blended Refined Edible Oil 5 L"
          price="₹900.00"
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />
        {/* Add more Card components as needed */}
      </Slider>
    </div>
  );
};

export default CardCarousel;