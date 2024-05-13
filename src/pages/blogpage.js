import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Blog from '../components/blog';
import BlogRead from '../components/blogread';


const GalleryPage = () => {
  return (
    <div>
      {<Header/>}
      {<Blog/>}
      {<Footer/>}
    </div>
  )
}

export default GalleryPage
