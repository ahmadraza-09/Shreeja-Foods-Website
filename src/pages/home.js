import React from 'react'
import Banners from '../components/banners';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import OurProducts from '../components/ourproducts';
import WelcomeSection from '../components/welcomesection';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<Banners images={['images/asset 13.jpeg']}/>}
      {<Banners images={['images/asset 14.jpeg']}/>}
      {<Banners images={['images/asset 15.jpeg']}/>}
      {<OurProducts/>}
      {<Footer/>}
    </>
  )
}

export default Home
