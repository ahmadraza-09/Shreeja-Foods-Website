import { useState, useEffect } from 'react';
import blogData from '../data/blogdata';
import '../css/blog.css';
import BlogCard from './blogcard';
import RecentPostCard from './recentpostcard';
import BlogRead from './blogread';

const Blog = () => {

  const [showFilter, setShowFilter] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogData, setFilteredBlogData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleBlogCardClick = (blogId) => {
    setSelectedBlog(blogId);
  };

  const handleCloseBlogRead = () => {
    setSelectedBlog(null);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterBlogData(query.trim());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      setFilteredBlogData(blogData);
    } else {
      filterBlogData(searchQuery.trim());
    }
    setSelectedBlog(null);
  };

  useEffect(() => {
    setFilteredBlogData(blogData);
  }, []);

  const filterBlogData = (query) => {
    const filteredData = blogData.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogData(filteredData);
    setNoDataFound(filteredData.length === 0);
  };

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
            <form className='blog-search' onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder='Search Blogs...' 
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
              <button type='submit'>Search</button>
            </form>
            <h3>Recent Posts</h3>
            <div className="recent-post">
              {blogData.map(blog => (
                <RecentPostCard
                  key={blog.id}
                  imageUrl={blog.imageUrl}
                  title={blog.title}
                  date={blog.date}
                  onClick={() => handleBlogCardClick(blog.id)}
                />
              ))}
            </div>
          </div>
          <div className="blog-main-section-right">
            <div className="blog-main-section-right-header">
              {selectedBlog !== null && (
                <label className="blog-back" onClick={handleCloseBlogRead}>
                  <h4>Back</h4>
                </label>
              )}
              <label className="blog-filter" htmlFor='filter-check' onClick={handleFilterToggle}>
                <h4>Filter</h4>
                <img src="images/filter.png" alt="" />
              </label>
            </div>
            {noDataFound ? (
              <p>Blog Not Available!</p>
            ) : (
              selectedBlog === null ? (
                filteredBlogData.map(blog => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    imageUrl={blog.imageUrl}
                    title={blog.title}
                    paragraph={blog.paragraph}
                    buttonText={blog.buttonText}
                    onClick={() => handleBlogCardClick(blog.id)}
                  />
                ))
                ) : (
                  <BlogRead
                    title={blogData[selectedBlog - 1].title}
                    imageUrl={blogData[selectedBlog - 1].imageUrl}
                    paragraph={blogData[selectedBlog - 1].paragraph}
                    onClose={handleCloseBlogRead}
                  />
                )
              )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
