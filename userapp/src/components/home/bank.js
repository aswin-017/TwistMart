import React from 'react';
import '../../assets/css/card-2.css'; // Make sure the CSS path is correct

const cardData = [
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_neucard_010624.jpg?tr=w-1920,q=80',
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_citicc_010624.jpg?tr=w-1920,q=80',
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_deutsche_010624.jpg?tr=w-1920,q=80',
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_citidc_010624.jpg?tr=w-1920,q=80',
  },
  { 
    imgSrc: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_neucard_010624.jpg?tr=w-1920,q=80',
  }
];

const Card4 = () => {
  return (
    <div className="container">
      <h2 className="new-arrivals">Bank Offers</h2>
      <div className="card-deck">
        {cardData.map((card, index) => (
          <div className="card my-3" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              {/* Since there are no titles or descriptions in cardData, just displaying the image */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;
