import React from 'react';
import '../css/product.css';

const Product = ({ imageUrl, productName }) => {
  return (
    <div className="product-card product">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-content">
        <h3>{productName}</h3>
      </div>
    </div>
  );
};

export default Product;
