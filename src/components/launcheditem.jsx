import React from 'react';
import '../css/launcheditem.css';

const LaunchedItem = ({ isLaunched, imageUrl, itemName }) => {
  return (
    <>
      <div className="launched-item-card">
        <div className="launched-item-card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="launched-item-card-name">
          <h4>{itemName}</h4>
        </div>
        <div className={`launched-tag ${isLaunched ? 'launched-tag-green' : ''}`}>
          <div className="tag-title">
            {isLaunched ? 'Launched' : 'Upcoming'}
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchedItem;
