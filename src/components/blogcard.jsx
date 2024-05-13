import React from 'react';
import '../css/blogcard.css';

const BlogCard = ({ imageUrl, title, paragraph, buttonText }) => {
  return (
    <>
      <div className="blog-card">
        <div className="blog-card-image">
            <img src={imageUrl} alt="" />
        </div>
        <div className="blog-card-content">
            <div className="blog-card-title">
                <h4>{title}</h4>
            </div>
            <div className="blog-card-paragraph">
                <p>{paragraph}</p>
            </div>

            <button className='blog-card-button'>{buttonText}<i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </div>
    </>
  )
}

export default BlogCard;
