import React from 'react';
import '../css/banners.css';

const Banners = ({ images }) => {
  return (
    <div className="banners-section">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Banner ${index + 1}`} />
      ))}
    </div>
  );
};

export default Banners;
