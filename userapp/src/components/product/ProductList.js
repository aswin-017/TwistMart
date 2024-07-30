
// Assuming ProductCard.js is in the same directory
// import pro from '../../assets/images/tomato.jpg';
// import '../../assets/css/ProductList.css'

// import React from 'react';
// import ProductCard from './ProductCard';

// const ProductList = () => {
//   // Example list of products
//   const products = [
//     { id: 1, name: 'Product 1', price: '$19.99', image: pro },
//     { id: 2, name: 'Product 2', price: '$29.99', image: pro },
//     { id: 3, name: 'Product 3', price: '$39.99', image: pro },
//     { id: 4, name: 'Product 4', price: '$49.99', image: pro },
//     { id: 5, name: 'Product 5', price: '$59.99', image: pro },
//     { id: 6, name: 'Product 6', price: '$69.99', image:pro},
//     { id: 7, name: 'Product 7', price: '$79.99', image: pro },
//     { id: 8, name: 'Product 8', price: '$89.99', image:pro },
//     { id: 9, name: 'Product 9', price: '$99.99', image: pro },
//   ];

//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../../assets/css/ProductList.css';
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

// Sample products (replace with your actual data)
const products = [
    { id: 1, name: 'Rice', price: '₹100 - ₹150', image: riceImage },
    { id: 2, name: 'Tomato', price: '₹20 - ₹40', image: tomatoImage },
    { id: 3, name: 'Potato', price: '₹20 - ₹30', image: potatoImage },
    { id: 4, name: 'Onion', price: '₹30 - ₹50', image: onionImage },
    { id: 5, name: 'Garlic', price: '₹120 - ₹180', image: garlicImage },
    { id: 6, name: 'Carrot', price: '₹40 - ₹60', image: carrotImage },
    { id: 7, name: 'Beans', price: '₹50 - ₹70', image: beansImage },
    { id: 8, name: 'Cabbage', price: '₹20 - ₹40', image: cabbageImage },
    { id: 9, name: 'Broccoli', price: '₹60 - ₹80', image: broccoliImage },
    { id: 10, name: 'Spinach', price: '₹30 - ₹50', image: spinachImage },
    { id: 11, name: 'Apple', price: '₹100 - ₹140', image: appleImage },
    { id: 12, name: 'Banana', price: '₹30 - ₹50', image: bananaImage },
    { id: 13, name: 'Orange', price: '₹70 - ₹90', image: orangeImage },
    { id: 14, name: 'Mango', price: '₹130 - ₹170', image: mangoImage },
    { id: 15, name: 'Pineapple', price: '₹80 - ₹100', image: pineappleImage }
  ];
  
const ProductList = () => {
    const [search, setSearch] = useState('');

    const filteredList = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="app">
            <div className="search-wrapper">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search product name.."
                />
                <label>Search product name:</label>
            </div>
            <div className="wrapper">
                {filteredList.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/css/ProductList.css';

// // Sample images (replace with your actual images)
// import riceImage from '../../assets/images/rice.avif';
// import tomatoImage from '../../assets/images/tomato.jpg';
// import potatoImage from '../../assets/images/potato.avif';
// import onionImage from '../../assets/images/onion.jpg';
// import garlicImage from '../../assets/images/garlic.jpg';
// import carrotImage from '../../assets/images/carrot.jpg';
// import beansImage from '../../assets/images/beans.jpg';
// import cabbageImage from '../../assets/images/cabbage.jpg';
// import broccoliImage from '../../assets/images/broccoli.jpg';
// import spinachImage from '../../assets/images/spinach.jpg';
// import appleImage from '../../assets/images/apple.jpg';
// import bananaImage from '../../assets/images/banana.jpg';
// import orangeImage from '../../assets/images/orange.jpg';
// import mangoImage from '../../assets/images/mango.jpg';
// import pineappleImage from '../../assets/images/pineapple.jpg';

// const products = [
//   { id: 1, name: 'Rice', price: '₹100', image: riceImage },
//   { id: 2, name: 'Tomato', price: '₹30', image: tomatoImage },
//   { id: 3, name: 'Potato', price: '₹25', image: potatoImage },
//   { id: 4, name: 'Onion', price: '₹40', image: onionImage },
//   { id: 5, name: 'Garlic', price: '₹150', image: garlicImage },
//   { id: 6, name: 'Carrot', price: '₹50', image: carrotImage },
//   { id: 7, name: 'Beans', price: '₹60', image: beansImage },
//   { id: 8, name: 'Cabbage', price: '₹30', image: cabbageImage },
//   { id: 9, name: 'Broccoli', price: '₹70', image: broccoliImage },
//   { id: 10, name: 'Spinach', price: '₹40', image: spinachImage },
//   { id: 11, name: 'Apple', price: '₹120', image: appleImage },
//   { id: 12, name: 'Banana', price: '₹40', image: bananaImage },
//   { id: 13, name: 'Orange', price: '₹80', image: orangeImage },
//   { id: 14, name: 'Mango', price: '₹150', image: mangoImage },
//   { id: 15, name: 'Pineapple', price: '₹90', image: pineappleImage }
// ];

// const ProductList = () => {
//   const [search, setSearch] = useState('');

//   const filteredList = products.filter(product =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div id="app">
//       <div className="search-wrapper">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search product name..."
//         />
//         <label>Search product name:</label>
//       </div>
//       <div className="wrapper">
//         {filteredList.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <Link to={`/product/${product.id}`} className="product-link">
//         <div className="product-image-container">
//           <img src={product.image} alt={product.name} className="product-image" />
//         </div>
//         <div className="product-details">
//           <h3 className="product-name">{product.name}</h3>
//           <p className="product-price">{product.price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductList;
