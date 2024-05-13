import { useState } from 'react';
import '../css/blog.css';
import BlogCard from './blogcard';
import RecentPostCard from './recentpostcard';

const Blog = () => {

  const [showFilter, setShowFilter] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const blogData = [
    {
      id: 1,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Best Saffron Storage Tips to Preserve Flavour",
      paragraph: "Saffron is one of the most luxurious spices that can transform the look and taste of a dish. Used in various savoury and sweet dishes, this delicate thread-like spice is obtained from the stigma of the Crocus sativus flower. To ensure you get maximum flavour from your saffron, only buy saffron online from premium sources.",
      buttonText: "Read More"
    },
    {
      id: 2,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    {
      id: 3,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    {
      id: 4,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    {
      id: 5,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    {
      id: 6,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    {
      id: 7,
      imageUrl: "https://www.dryfruitbasket.in/storage/media/post/202403281143_post_saffron-storage.jpg",
      title: "Another Blog Post",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Read More"
    },
    
  ];

  return (
    <>
      <div className="blog-section">
        <div className="about-banner contact-banner">
          <img src="images/banner6.jpg" alt="" />
        </div>
        <h2>Blog</h2>
        <div className="blog-main-section">
            <div className={`blog-main-section-left ${showFilter ? 'show' : 'hide'}`}>
                <label htmlFor="filter-check" onClick={handleFilterToggle}><i className="fa-solid fa-xmark"></i></label>
                <input type="checkbox" id='filter-check'/>
                <form className='blog-search'>
                    <input 
                    type="text" 
                    placeholder='Search Blogs...' 
                    // value={searchQuery} 
                    // onChange={handleSearchChange} 
                    />
                    <button>Search</button>
                </form>
                <div className="recent-post">
                    <RecentPostCard/>
                    <RecentPostCard/>
                    <RecentPostCard/>
                    <RecentPostCard/>
                    <RecentPostCard/>
                </div>
            </div>
            <div className="blog-main-section-right">
                <label className="blog-filter" htmlFor='filter-check' onClick={handleFilterToggle}>
                    <h4>Filter</h4>
                    <img src="images/filter.png" alt="" />
                </label>
                {blogData.map(blog => (
                  <BlogCard
                    key={blog.id}
                    imageUrl={blog.imageUrl}
                    title={blog.title}
                    paragraph={blog.paragraph}
                    buttonText={blog.buttonText}
                  />
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
