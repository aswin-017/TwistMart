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
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../assets/css/ProductDetails.css'; // Ensure this CSS file is created

// Sample images (replace with your actual images)
import riceImage from '../../assets/images/rice.avif';
import tomatoImage from '../../assets/images/tomato.jpg';
import potatoImage from '../../assets/images/potato.avif';

// Sample products (replace with your actual data)
const products = [
  { id: 1, name: 'Rice', image: riceImage, description: 'High-quality rice' },
  { id: 2, name: 'Tomato', image: tomatoImage, description: 'Fresh tomatoes' },
  { id: 3, name: 'Potato', image: potatoImage, description: 'Organic potatoes' },
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams(); // Extracts the id parameter from the URL
  const navigate = useNavigate(); // Initializes navigate hook
  const productId = parseInt(id, 10); // Converts id to integer

  // Find the product based on productId
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate('/products')}>
        &larr; Back
      </button>
      <div className="product-info">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
