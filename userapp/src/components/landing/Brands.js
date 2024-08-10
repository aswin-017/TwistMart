import React from 'react';
import '../../../assets/css/user/landing/Brands.css'; // Assuming this is your CSS file for styling

// Sample image URLs
const images = [
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719719924_Daawat.jpg?im=Resize=(368,452)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719719981_Surf_excel.jpg?im=Resize=(368,452)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719720036_Oneplus.jpg?im=Resize=(368,452)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1721911944_Bajaj.jpg?im=Resize=(368,452)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722113942_Skybags.jpg?im=Resize=(368,452)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1722504446_Janasya.jpg?im=Resize=(368,452)',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const ImageCardRow = () => {
  return (
    <div className="image-card-row-container">
      {images.slice(0, 6).map((image, index) => (
        <div key={index} className="image-card">
          <img src={image} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardRow;
