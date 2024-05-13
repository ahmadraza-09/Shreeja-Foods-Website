import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Gallery from '../components/gallery';


const GalleryPage = () => {
  return (
    <div>
      {<Header/>}
      {<Gallery/>}
      {<Footer/>}
    </div>
  )
}

export default GalleryPage
