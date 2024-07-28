import React, { useState } from 'react';
import '../../assets/css/card-2.css';

const cardData = [
  { 
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40005418_5-yummiez-nuggets-chicken.jpg?tr=w-1920,q=80',
    title: 'Chicken Nuggets',
    description: 'Description for card 1'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/1224544_2-pillsbury-attagodihittu-multigrain.jpg?tr=w-1920,q=80',
    title: 'Multigrain Atta',
    description: 'Description for card 2'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80',
    title: 'Strawberry',
    description: 'Description for card 3'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80',
    title: 'Mushroom',
    description: 'Description for card 4'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/40188537_5-keya-penne-pasta.jpg?tr=w-1920,q=80',
    title: 'Penne Pasta',
    description: 'Description for card 5'
  }
];

const Card3 = () => {
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
      <h2 className="new-arrivals">Discounts & Offers</h2>
      <div className="card-deck">
        {cardData.map((card, index) => (
          <div className="card my-3" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.description}</p>
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

export default Card3;
