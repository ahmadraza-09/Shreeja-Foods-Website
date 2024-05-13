import React from 'react';
import '../css/recentpostcard.css';

const RecentPostCard = ({ id, imageUrl, title, date, onClick }) => {

  const handleClick = () => {
    onClick(id);
  }

  return (
    <div className="recent-post-card" onClick={handleClick}>
      <div className="recent-post-card-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="recent-post-card-content">
        <div className="recent-post-card-content-title">
          <h4>{title}</h4>
        </div>
        <div className="recent-post-card-content-time">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
