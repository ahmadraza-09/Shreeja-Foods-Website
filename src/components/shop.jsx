import React, { useState } from 'react';
import '../css/shop.css';
import Banners from '../components/banners';
import Product from './product';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    { imageUrl: "images/asset 18.png", productName: "Makhana Gold" },
    { imageUrl: "images/asset 19.png", productName: "Makhana Diamond" },
    { imageUrl: "images/asset 20.png", productName: "Garam Masala" },
    { imageUrl: "images/asset 21.png", productName: "Dry Fruits" },
    { imageUrl: "images/asset 22.png", productName: "Makhana Silver" },
    { imageUrl: "images/asset 23.png", productName: "Garam Masala" },
    { imageUrl: "images/asset 20.png", productName: "Garam Masala" },
    { imageUrl: "images/asset 21.png", productName: "Dry Fruits" },
    { imageUrl: "images/asset 22.png", productName: "Makhana Silver" },
    { imageUrl: "images/asset 18.png", productName: "Makhana Gold" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop-section">
      <Banners images={['images/asset 13.jpeg']} />
      <h2>Our Products</h2>  
      <form className='product-search'>
        <input 
          type="text" 
          placeholder='Search Makhana, Dry Fruits, Spices...' 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button>Search</button>
      </form> 
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} imageUrl={product.imageUrl} productName={product.productName} />
          ))
        ) : (
          <p>No Products Available !</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
