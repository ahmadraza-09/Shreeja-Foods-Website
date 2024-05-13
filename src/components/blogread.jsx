import React from 'react'
import '../css/blogread.css';

const BlogRead = ({ title, imageUrl, paragraph }) => {
  return (
    <>
      <div className="blog-read-section">
            <div className="blog-read-tittle">
                <h2>{title}</h2>
            </div>
            <div className="blog-read-image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="blog-read-tittle">
                <h3>{title}</h3>
            </div>
            {Array.isArray(paragraph) ? (
              paragraph.map((paragraph, index) => (
                <div key={index} className="blog-read-paragraph">
                  <p>{paragraph}</p>
                </div>
              ))
            ) : (
              <div className="blog-read-paragraph">
                <p>{paragraph}</p>
              </div>
            )}
      </div>
    </>
  )
}

export default BlogRead
