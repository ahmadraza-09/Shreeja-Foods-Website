import React, { useState } from 'react';
import '../css/ourproducts.css';

const OurProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('Makhana'); // Default to 'Featured'
  const [showClickBranch, setShowClickBranch] = useState(true);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowClickBranch(false);
  };

  return (
    <>
      <div className="our-product-section">
        <h3>Featured Products</h3>
        <h2>OUR PRODUCTS</h2>
        <div className="product-header">
          <div className={`product-header-box ${selectedCategory === 'Makhana' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Makhana')}>
            <div className="image">
              <img src="https://t3.ftcdn.net/jpg/04/58/44/42/240_F_458444258_Q86HBCe7MOGPO2Gla4C2j04es5j3ezX1.jpg" alt="" />
            </div>
            <h3>Makhana</h3>
          </div>
          <div className={`product-header-box ${selectedCategory === 'Dry Fruits' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Dry Fruits')}>
            <div className="image">
              <img src="https://t4.ftcdn.net/jpg/02/87/31/69/240_F_287316909_JUPpYr5wcNPbd7jSJETZDBsop5QRY4Ci.jpg" alt="" />
            </div>
            <h3>Dry Fruits</h3>
          </div>
          <div className={`product-header-box ${selectedCategory === 'Spices' ? 'selected' : ''}`} onClick={() => handleCategoryClick('Spices')}>
            <div className="image">
              <img src="https://t3.ftcdn.net/jpg/00/68/65/94/240_F_68659462_zmt69ZqRLogQ2pGF9aiP5WPgbJp40ZQp.jpg" alt="" />
            </div>
            <h3>Spices</h3>
          </div>
        </div>
        {( showClickBranch &&
            <p className='instruction'>Click on a category to view more Products...</p>
        )}
        <div className="welcome-cards">
          {/* Conditionally render products based on selected category */}
          {selectedCategory === 'Makhana' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 18.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Makhana Gold</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Makhana' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 19.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Makhana Diamond</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Makhana' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 22.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Makhana Silver</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Makhana' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 19.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Makhana Diamond</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Spices' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 17.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Gram Masala</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Spices' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 20.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Gram Masala</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Dry Fruits' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 16.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Dry Fruits</h3>
              </div>
            </div>
          )}
          {selectedCategory === 'Dry Fruits' && (
            <div className="product-card">
              <div className="product-image">
                <img src="images/asset 21.png" alt="" />
              </div>
              <div className="product-content">
                <h3>Dry Fruits</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurProducts;
