// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../../assets/css/ProductDetails.css'; // Ensure this CSS file is created

// // Import images
// import riceImage from '../../assets/images/tomato.jpg';
// import tomatoImage from '../../assets/images/tomato.jpg';
// import potatoImage from '../../assets/images/tomato.jpg';
// import onionImage from '../../assets/images/tomato.jpg';
// import wheatFlourImage from '../../assets/images/tomato.jpg';
// import sugarImage from '../../assets/images/tomato.jpg';
// import milkImage from '../../assets/images/tomato.jpg';
// import eggsImage from '../../assets/images/tomato.jpg';
// import butterImage from '../../assets/images/tomato.jpg';
// import cheeseImage from '../../assets/images/tomato.jpg';

// // Array of products with images and descriptions
// const products = [
//   { id: 1, name: 'Rice', image: riceImage, description: 'High-quality rice' },
//   { id: 2, name: 'Tomato', image: tomatoImage, description: 'Fresh tomatoes' },
//   { id: 3, name: 'Potato', image: potatoImage, description: 'Organic potatoes' },
//   { id: 4, name: 'Onion', image: onionImage, description: 'Fresh onions' },
//   { id: 5, name: 'Wheat Flour', image: wheatFlourImage, description: 'Premium wheat flour' },
//   { id: 6, name: 'Sugar', image: sugarImage, description: 'Refined sugar' },
//   { id: 7, name: 'Milk', image: milkImage, description: 'Fresh milk' },
//   { id: 8, name: 'Eggs', image: eggsImage, description: 'Farm-fresh eggs' },
//   { id: 9, name: 'Butter', image: butterImage, description: 'Creamy butter' },
//   { id: 10, name: 'Cheese', image: cheeseImage, description: 'Aged cheese' },
// ];

// // Mock data for shops
// const shops = [
//   { id: 1, name: 'Shop A', prices: { 1: 100, 2: 50, 3: 40, 4: 30, 5: 60, 6: 20, 7: 80, 8: 10, 9: 150, 10: 200 }, ratings: { 1: 4.5, 2: 4.0, 3: 4.2, 4: 3.8, 5: 4.5, 6: 3.5, 7: 4.0, 8: 4.7, 9: 4.1, 10: 4.3 } },
//   { id: 2, name: 'Shop B', prices: { 1: 110, 2: 55, 3: 42, 4: 32, 5: 65, 6: 22, 7: 85, 8: 12, 9: 155, 10: 210 }, ratings: { 1: 4.6, 2: 4.1, 3: 4.3, 4: 3.9, 5: 4.6, 6: 3.6, 7: 4.1, 8: 4.8, 9: 4.2, 10: 4.4 } },
//   { id: 3, name: 'Shop C', prices: { 1: 120, 2: 60, 3: 45, 4: 35, 5: 70, 6: 25, 7: 90, 8: 15, 9: 160, 10: 220 }, ratings: { 1: 4.4, 2: 4.2, 3: 4.0, 4: 4.0, 5: 4.5, 6: 3.8, 7: 4.2, 8: 4.9, 9: 4.3, 10: 4.5 } },
//   { id: 4, name: 'Shop D', prices: { 1: 105, 2: 52, 3: 41, 4: 28, 5: 62, 6: 18, 7: 82, 8: 11, 9: 145, 10: 195 }, ratings: { 1: 4.7, 2: 4.3, 3: 4.1, 4: 4.2, 5: 4.6, 6: 3.7, 7: 4.3, 8: 4.8, 9: 4.0, 10: 4.4 } },
//   { id: 5, name: 'Shop E', prices: { 1: 115, 2: 57, 3: 44, 4: 33, 5: 68, 6: 23, 7: 88, 8: 14, 9: 150, 10: 205 }, ratings: { 1: 4.5, 2: 4.0, 3: 4.2, 4: 3.9, 5: 4.4, 6: 3.6, 7: 4.0, 8: 4.7, 9: 4.2, 10: 4.3 } },
// ];

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate(); // Initialize navigate hook
//   const productId = parseInt(id, 10);
//   const product = products.find(p => p.id === productId);

//   const shopList = shops.map(shop => (
//     <div key={shop.id} className="shop-item">
//       <h3>{shop.name}</h3>
//       <p>Price: ₹{shop.prices[productId]}</p>
//       <p>Rating: {shop.ratings[productId]} stars</p>
//       <button className="shop-link">View Details</button>
//     </div>
//   ));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-details-container">
//       <button className="back-button" onClick={() => navigate('/product')}>
//         &larr; Back
//       </button>
//       <div className="product-info">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <div className="product-details">
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//         </div>
//       </div>
//       <div className="shop-list">
//         {shopList}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
// ProductDetails.js

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../../assets/css/ProductDetails.css'; // Ensure this CSS file is created

// // Import images (Assuming these are correctly imported)
// import riceImage from '../../assets/images/rice.avif';
// import tomatoImage from '../../assets/images/tomato.jpg';
// import potatoImage from '../../assets/images/potato.avif';
// // Import other images as needed

// // Array of products with images and descriptions
// const products = [
//   { id: 1, name: 'Rice', image: riceImage, description: 'High-quality rice' },
//   { id: 2, name: 'Tomato', image: tomatoImage, description: 'Fresh tomatoes' },
//   { id: 3, name: 'Potato', image: potatoImage, description: 'Organic potatoes' },
//   // Add more products as needed
// ];

// // Mock data for shops (Assuming this is correctly defined)
// const shops = [
//   // Mock data for shops as provided in your example
// ];

// const ProductDetails = () => {
//   const { id } = useParams(); // Get the product id from URL params
//   const navigate = useNavigate(); // Initialize navigate hook
//   const productId = parseInt(id, 10); // Parse id to integer
//   const product = products.find(p => p.id === productId); // Find product by id

//   const shopList = shops.map(shop => (
//     <div key={shop.id} className="shop-item">
//       <h3>{shop.name}</h3>
//       <p>Price: ₹{shop.prices[productId]}</p>
//       <p>Rating: {shop.ratings[productId]} stars</p>
//       <button className="shop-link">View Details</button>
//     </div>
//   ));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-details-container">
//       <button className="back-button" onClick={() => navigate('/products')}>
//         &larr; Back
//       </button>
//       <div className="product-info">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <div className="product-details">
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//         </div>
//       </div>
//       <div className="shop-list">
//         {shopList}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
// ProductDetails.js

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../../assets/css/ProductDetails.css'; // Ensure this CSS file is created

// // Sample images (replace with your actual images)
// import riceImage from '../../assets/images/rice.avif';
// import tomatoImage from '../../assets/images/tomato.jpg';
// import potatoImage from '../../assets/images/potato.avif';

// // Sample products (replace with your actual data)
// const products = [
//   { id: 1, name: 'Rice', image: riceImage, description: 'High-quality rice' },
//   { id: 2, name: 'Tomato', image: tomatoImage, description: 'Fresh tomatoes' },
//   { id: 3, name: 'Potato', image: potatoImage, description: 'Organic potatoes' },
//   // Add more products as needed
// ];

// const ProductDetails = () => {
//   const { id } = useParams(); // Extracts the id parameter from the URL
//   const navigate = useNavigate(); // Initializes navigate hook
//   const productId = parseInt(id, 10); // Converts id to integer

//   // Find the product based on productId
//   const product = products.find(p => p.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product-details-container">
//       <button className="back-button" onClick={() => navigate('/products')}>
//         &larr; Back
//       </button>
//       <div className="product-info">
//         <img src={product.image} alt={product.name} className="product-image" />
//         <div className="product-details">
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/css/ProductDetails.css';
// import { useState } from 'react';

// Sample images (replace with your actual images)
import riceImage from '../../assets/images/rice.avif';
import tomatoImage from '../../assets/images/tomato.jpg';
import potatoImage from '../../assets/images/potato.avif';
import onionImage from '../../assets/images/onion.jpg';
import garlicImage from '../../assets/images/garlic.jpg';
import carrotImage from '../../assets/images/carrot.jpg';
import beansImage from '../../assets/images/beans.jpg';
import cabbageImage from '../../assets/images/cabbage.jpg';
import broccoliImage from '../../assets/images/broccoli.jpg';
import spinachImage from '../../assets/images/spinach.jpg';
import appleImage from '../../assets/images/apple.jpg';
import bananaImage from '../../assets/images/banana.jpg';
import orangeImage from '../../assets/images/orange.jpg';
import mangoImage from '../../assets/images/mango.jpg';
import pineappleImage from '../../assets/images/pineapple.jpg';
import { useCart } from '../context/CartContext';

// Sample products (replace with your actual data)
const products = [
  { id: 1, name: 'Rice', image: riceImage, description: 'High-quality rice', price: '₹100 - ₹150' },
  { id: 2, name: 'Tomato', image: tomatoImage, description: 'Fresh tomatoes', price: '₹20 - ₹40' },
  { id: 3, name: 'Potato', image: potatoImage, description: 'Organic potatoes', price: '₹30 - ₹50' },
  { id: 4, name: 'Onion', image: onionImage, description: 'Fresh onions', price: '₹25 - ₹45' },
  { id: 5, name: 'Garlic', image: garlicImage, description: 'Fresh garlic', price: '₹60 - ₹80' },
  { id: 6, name: 'Carrot', image: carrotImage, description: 'Organic carrots', price: '₹40 - ₹60' },
  { id: 7, name: 'Beans', image: beansImage, description: 'Fresh beans', price: '₹35 - ₹55' },
  { id: 8, name: 'Cabbage', image: cabbageImage, description: 'Organic cabbage', price: '₹20 - ₹30' },
  { id: 9, name: 'Broccoli', image: broccoliImage, description: 'Fresh broccoli', price: '₹50 - ₹70' },
  { id: 10, name: 'Spinach', image: spinachImage, description: 'Fresh spinach', price: '₹15 - ₹25' },
  { id: 11, name: 'Apple', image: appleImage, description: 'Organic apples', price: '₹100 - ₹150' },
  { id: 12, name: 'Banana', image: bananaImage, description: 'Fresh bananas', price: '₹30 - ₹50' },
  { id: 13, name: 'Orange', image: orangeImage, description: 'Juicy oranges', price: '₹40 - ₹60' },
  { id: 14, name: 'Mango', image: mangoImage, description: 'Sweet mangoes', price: '₹80 - ₹120' },
  { id: 15, name: 'Pineapple', image: pineappleImage, description: 'Fresh pineapple', price: '₹70 - ₹90' }
];

// Mock data for shops
const shops = [
  { id: 1, name: 'Shop A', prices: { 1: 120, 2: 25, 3: 35, 4: 30, 5: 70, 6: 50, 7: 40, 8: 25, 9: 60, 10: 20, 11: 130, 12: 45, 13: 55, 14: 100, 15: 85 }, ratings: { 1: 4.5, 2: 4.0, 3: 4.2, 4: 3.8, 5: 4.5, 6: 4.5, 7: 4.0, 8: 3.8, 9: 4.5, 10: 4.0, 11: 4.7, 12: 4.1, 13: 4.3, 14: 4.5, 15: 4.4 } },
  { id: 2, name: 'Shop B', prices: { 1: 125, 2: 27, 3: 37, 4: 32, 5: 75, 6: 52, 7: 42, 8: 27, 9: 65, 10: 22, 11: 135, 12: 47, 13: 57, 14: 105, 15: 87 }, ratings: { 1: 4.6, 2: 4.1, 3: 4.3, 4: 3.9, 5: 4.6, 6: 4.6, 7: 4.1, 8: 3.9, 9: 4.6, 10: 4.1, 11: 4.8, 12: 4.2, 13: 4.4, 14: 4.6, 15: 4.5 } },
  { id: 3, name: 'Shop C', prices: { 1: 130, 2: 29, 3: 39, 4: 34, 5: 80, 6: 55, 7: 45, 8: 29, 9: 70, 10: 25, 11: 140, 12: 50, 13: 60, 14: 110, 15: 90 }, ratings: { 1: 4.4, 2: 4.2, 3: 4.4, 4: 4.0, 5: 4.4, 6: 4.4, 7: 4.2, 8: 4.0, 9: 4.4, 10: 4.2, 11: 4.6, 12: 4.3, 13: 4.5, 14: 4.4, 15: 4.3 } },
  { id: 4, name: 'Shop D', prices: { 1: 135, 2: 26, 3: 36, 4: 33, 5: 78, 6: 53, 7: 44, 8: 28, 9: 68, 10: 23, 11: 138, 12: 49, 13: 58, 14: 107, 15: 89 }, ratings: { 1: 4.7, 2: 4.3, 3: 4.5, 4: 4.2, 5: 4.7, 6: 4.7, 7: 4.3, 8: 4.2, 9: 4.7, 10: 4.3, 11: 4.9, 12: 4.4, 13: 4.6, 14: 4.7, 15: 4.6 } },
  { id: 5, name: 'Shop E', prices: { 1: 140, 2: 28, 3: 38, 4: 35, 5: 82, 6: 57, 7: 46, 8: 30, 9: 72, 10: 26, 11: 142, 12: 51, 13: 62, 14: 112, 15: 92 }, ratings: { 1: 4.5, 2: 4.0, 3: 4.2, 4: 3.8, 5: 4.5, 6: 4.5, 7: 4.0, 8: 3.8, 9: 4.5, 10: 4.0, 11: 4.7, 12: 4.1, 13: 4.3, 14: 4.5, 15: 4.4 } },
  { id: 6, name: 'Shop F', prices: { 1: 145, 2: 30, 3: 40, 4: 36, 5: 85, 6: 60, 7: 48, 8: 32, 9: 75, 10: 28, 11: 145, 12: 52, 13: 64, 14: 115, 15: 95 }, ratings: { 1: 4.6, 2: 4.1, 3: 4.3, 4: 4.0, 5: 4.6, 6: 4.6, 7: 4.1, 8: 4.0, 9: 4.6, 10: 4.1, 11: 4.8, 12: 4.2, 13: 4.4, 14: 4.6, 15: 4.5 } },
  { id: 7, name: 'Shop G', prices: { 1: 150, 2: 32, 3: 42, 4: 37, 5: 90, 6: 62, 7: 50, 8: 34, 9: 78, 10: 30, 11: 150, 12: 54, 13: 66, 14: 120, 15: 97 }, ratings: { 1: 4.7, 2: 4.2, 3: 4.4, 4: 4.1, 5: 4.7, 6: 4.7, 7: 4.2, 8: 4.1, 9: 4.7, 10: 4.2, 11: 4.9, 12: 4.3, 13: 4.5, 14: 4.7, 15: 4.6 } },
  { id: 8, name: 'Shop H', prices: { 1: 155, 2: 34, 3: 44, 4: 38, 5: 92, 6: 64, 7: 52, 8: 36, 9: 80, 10: 32, 11: 155, 12: 56, 13: 68, 14: 125, 15: 100 }, ratings: { 1: 4.8, 2: 4.3, 3: 4.5, 4: 4.2, 5: 4.8, 6: 4.8, 7: 4.3, 8: 4.2, 9: 4.8, 10: 4.3, 11: 5.0, 12: 4.4, 13: 4.6, 14: 4.8, 15: 4.7 } },
  { id: 9, name: 'Shop I', prices: { 1: 160, 2: 36, 3: 46, 4: 39, 5: 95, 6: 67, 7: 54, 8: 38, 9: 82, 10: 34, 11: 160, 12: 58, 13: 70, 14: 130, 15: 105 }, ratings: { 1: 4.9, 2: 4.4, 3: 4.6, 4: 4.3, 5: 4.9, 6: 4.9, 7: 4.4, 8: 4.3, 9: 4.9, 10: 4.4, 11: 5.1, 12: 4.5, 13: 4.7, 14: 4.9, 15: 4.8 } },
  { id: 10, name: 'Shop J', prices: { 1: 165, 2: 38, 3: 48, 4: 40, 5: 100, 6: 70, 7: 56, 8: 40, 9: 85, 10: 36, 11: 165, 12: 60, 13: 72, 14: 135, 15: 110 }, ratings: { 1: 5.0, 2: 4.5, 3: 4.7, 4: 4.4, 5: 5.0, 6: 5.0, 7: 4.5, 8: 4.4, 9: 5.0, 10: 4.5, 11: 5.2, 12: 4.6, 13: 4.8, 14: 5.0, 15: 4.9 } }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the CartContext

  const productId = parseInt(id, 10);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <button className="return-to-products-button-renamed" onClick={() => navigate('/products')}>
        Return to Products
      </button>
      <div className="product-details-renamed">
        <img src={product.image} alt={product.name} className="product-image-renamed" />
        <div className="product-info-renamed">
          <h1 className="product-name-renamed">{product.name}</h1>
          <p className="product-description-renamed">{product.description}</p>
          <p className="product-price-renamed">Price Range: {product.price}</p>
        </div>
      </div>

      <h2 className="available-shops-heading-renamed">Available in Shops</h2>

      <div className="shop-list-renamed">
        {shops.map(shop => (
          <div key={shop.id} className="shop-item-renamed">
            <h3>{shop.name}</h3>
            <p>Price: ₹{shop.prices[product.id]}</p>
            <p>Rating: {shop.ratings[product.id]} stars</p>
            <button 
              className="add-to-cart-button"
              onClick={() => addToCart(productId, shop.id, shop.prices[product.id], product.name, shop.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;