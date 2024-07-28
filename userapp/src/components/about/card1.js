// card1.js

import React from 'react';
import '../../assets/css/card1.css';

const cards = [
  { 
    title: 'Fresh Fruits & Healthy Vegetables', 
    copy: 'Explore a variety of fresh fruits and nutritious vegetables to complete your meals.',
    button: 'Shop Now' 
  },
  { 
    title: 'Quality Rice & Nourishing Lentils (Dhall)', 
    copy: 'Find high-quality rice varieties including basmati, jasmine, and more, and browse through our selection of lentils (dhall) for your cooking needs.',
    button: 'Shop Now' 
  },
  { 
    title: 'Other Grocery Items', 
    copy: 'Explore our diverse range of grocery items including spices, oils, and more.',
    button: 'Shop Now' 
  },
];

const Card = ({ title, copy, button, imageId }) => (
  <div className="card" style={{ backgroundImage: `url(https://images.unsplash.com/photo-${imageId}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)` }}>
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

const CardList = () => {
  const imageIds = ['1629819611752-7beebf73e35b', '1531816536475-bcd71da1bfc5', '1622688994558-3c2f5abe6924', '1531306728370-e2ebd9d7bb99'];
  
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card key={index} {...card} imageId={imageIds[index]} />
      ))}
    </main>
  );
};

export default CardList;
