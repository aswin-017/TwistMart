import React from 'react';
import '../../../assets/css/user/landing/onecard.css'; // Assuming this is your CSS file for styling


const ImageCard = () => {
  return (
    <div className="card-container">
      {/* First Card Row */}
      <div className="card-row">
        <div className="card-column">
          <div className="custom-card">
            <img 
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1713435737_Global_Store_2368x400.jpg?im=Resize=(2368,400)" 
              className="custom-card-img" 
              alt="Image" 
            />
          </div>
        </div>
      </div>

      {/* Second Card Row */}
      <div className="card-row">
        <div className="card-column">
          <div className="custom-card">
            <img 
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1714050495_DailyMandi_1184x200.jpg?im=Resize=(2368,400)" 
              className="custom-card-img" 
              alt="Image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
