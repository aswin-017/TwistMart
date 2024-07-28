import React from 'react';
import '../../assets/css/card-2.css'; // Adjust the CSS file path if necessary

const cardData = [
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_biscuits-&-namkeens_480_250923.jpg?tr=w-1920,q=80',
    title: 'Biscuits & Namkeens',
    description: 'Description for card 1'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80',
    title: 'Fresh Vegetables',
    description: 'Description for card 2'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/fefafda6-5ef7-4ed2-8fee-2574720666d7/hp_c&h_m_detergents-&-fabric-care_480_250723.jpg?tr=w-1920,q=80',
    title: 'Detergents & Fabric Care',
    description: 'Description for card 3'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_pasta-sauces-&-more_480_270723.jpg?tr=w-1920,q=80',
    title: 'Pasta Sauces & More',
    description: 'Description for card 4'
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-1920,q=80',
    title: 'Herbs & Seasoning',
    description: 'Description for card 5'
  }
];

const Card4 = () => {
  // const [quantities, setQuantities] = useState(cardData.map(() => 1));

  // const handleQuantityChange = (index, newQuantity) => {
  //   const updatedQuantities = [...quantities];
  //   updatedQuantities[index] = newQuantity;
  //   setQuantities(updatedQuantities);
  // };

  // const handleAddToCart = (index) => {
  //   console.log(`Added ${quantities[index]} of ${cardData[index].title} to the cart.`);
  // };

  return (
    <div className="container">
      <h2 className="new-arrivals">Top Offers</h2>
      <div className="card-deck">
        {cardData.map((card, index) => (
          <div className="card my-3" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.description}</p>
              {/* 
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
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;
