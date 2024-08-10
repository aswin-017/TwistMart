import React from 'react';
import '../../../assets/css/user/landing/twocard.css'; // Assuming this is your CSS file for styling



const CardGrid = () => {
  const cards = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722621199_Millet_MiniBanner_632x160_1.jpg?im=Resize=(768,200)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1720160738_HealthCare.jpg?im=Resize=(768,200)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722621234_632.jpg?im=Resize=(768,200)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1721912587_Dining.jpg?im=Resize=(768,200)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1721317364_Ethnic_Styles.jpg?im=Resize=(768,200)',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1720436283_beauty_632.jpg?im=Resize=(768,200)',
  ];

  return (
    <div className="card-grid-wrapper-custom">
      {cards.map((image, index) => (
        <div className="card-custom" key={index}>
          <img src={image} alt={`Card Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
