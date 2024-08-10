import React from 'react';
import '../../../assets/css/user/landing/Top.css'; // Assuming this is your CSS file for styling


// Sample image URLs
const imageUrls = [
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719764818_Smartphones.jpg?im=Resize=(368,538)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1721297032_Smart_Televisions.jpg?im=Resize=(368,538)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1721909353_Small_Appliances.jpg?im=Resize=(368,538)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719764935_Mens_Fashion.jpg?im=Resize=(368,538)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719764923_Womens_Fashion.jpg?im=Resize=(368,538)',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1719765501_Kids_Fashion.jpg?im=Resize=(368,538)',

];

const Top = () => {
  return (
    <div className="card-row-wrapper">
      {imageUrls.slice(0, 6).map((url, index) => (
        <div key={index} className="card-item">
          <img src={url} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Top;