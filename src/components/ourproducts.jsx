import React, { useState } from 'react';
import '../css/ourproducts.css';
import Product from './product';

const OurProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('Makhana'); // Default to 'Featured'
  const [showClickBranch, setShowClickBranch] = useState(true);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowClickBranch(false);
  };

  // Sample product data array for each category
  const products = {
    Makhana: [
      { imageUrl: "images/asset 18.png", productName: "Makhana Gold" },
      { imageUrl: "images/asset 19.png", productName: "Makhana Diamond" },
      { imageUrl: "images/asset 22.png", productName: "Makhana Silver" },
      { imageUrl: "images/asset 19.png", productName: "Makhana Diamond" },
    ],
    Spices: [
      { imageUrl: "images/asset 17.png", productName: "Garam Masala" },
      { imageUrl: "images/asset 20.png", productName: "Garam Masala" },
    ],
    'Dry Fruits': [
      { imageUrl: "images/asset 16.png", productName: "Dry Fruits" },
      { imageUrl: "images/asset 21.png", productName: "Dry Fruits" },
    ],
  };

  return (
    <>
      <div className="our-product-section">
        <h3>Featured Products</h3>
        <h2>OUR PRODUCTS</h2>
        <div className="product-header">
          <div className={`product-header-box ${selectedCategory === 'Makhana' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Makhana')}>
            <div className="image">
              <img src="images/makhana-category.jpg" alt="" />
            </div>
            <h3>Makhana</h3>
          </div>
          <div className={`product-header-box ${selectedCategory === 'Dry Fruits' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Dry Fruits')}>
            <div className="image">
              <img src="images/dryfruits-category.jpg" alt="" />
            </div>
            <h3>Dry Fruits</h3>
          </div>
          <div className={`product-header-box ${selectedCategory === 'Spices' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Spices')}>
            <div className="image">
              <img src="images/spices-category.jpg" alt="" />
            </div>
            <h3>Spices</h3>
          </div>
        </div>
        {showClickBranch && (
          <p className='instruction'>Click on a category to view more Products...</p>
        )}
        <div className="welcome-cards">
          {/* Conditionally render products based on selected category */}
          {products[selectedCategory].map((product, index) => (
            <Product key={index} imageUrl={product.imageUrl} productName={product.productName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProducts;
