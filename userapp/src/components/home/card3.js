import React, { useState } from 'react';
import '../../assets/css/card--2.css';

const cardData = [
  { 
    imgSrc: 'https://i5.walmartimages.com/asr/6db28597-47ee-485f-9f11-72c6cee681be_1.3d19c39ee6f2546dc47f11b8e77d6657.jpeg',
    title: 'Detergents'
  },
  { 
    imgSrc: 'https://www.kumaragro.com/wp-content/uploads/2021/05/1-LIT.jpg',
    title: 'Sun Light Oil'
  },
  { 
    imgSrc: 'https://i5.walmartimages.com/asr/b1eb11b5-aafb-4bc5-886c-1470cc9f1813_1.41077f36256ad250274903389e57b820.jpeg',
    title: 'Dove Soap'
  },
  { 
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.B1MZ5a8P5gDK93XEC9-PxwHaHa&pid=Api&P=0&h=180',
    title: 'Hair Washer'
  },
  { 
    imgSrc: 'https://i5.walmartimages.com/asr/b9fd1e1b-9ae5-4aeb-9778-0453831c8d67.c29694a871990339bfbf420dc41c032a.jpeg',
    title: 'Cereals'
  }
];

const Card10 = () => {
  const [quantities, setQuantities] = useState(cardData.map(() => 1));

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const handleAddToCart = (index) => {
    console.log(`Added ${quantities[index]} of ${cardData[index].title} to the cart.`);
  };

  return (
    <div className="container">
      <h2 className="new-arrivals">New Arrivals</h2>
      <div className="card-deck">
        {cardData.map((card, index) => (
          <div className="card my-3" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <div className="quantity-container">
                <label htmlFor={`quantity-${index}`}>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${index}`}
                  min="1"
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                />
              </div>
              <button className="btn btn-primary" type="button" onClick={() => handleAddToCart(index)}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card10;
