import React from 'react'
import '../css/recentpostcard.css';

const RecentPostCard = () => {
  return (
    <>
      <div className="recent-post-card">
        <div className="recent-post-card-image">
            <img src="https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg" alt="" />
        </div>
        <div className="recent-post-card-content">
            <div className="recent-post-card-content-tittle">
                <h4>Best Saffron Storage Tips to Preserve Flavour</h4>
            </div>
            <div className="recent-post-card-content-time">
                <p>13 May, 2024 </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default RecentPostCard
