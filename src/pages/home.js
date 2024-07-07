import React from 'react'
import Banners from '../components/banners';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import OurProducts from '../components/ourproducts';
import WelcomeSection from '../components/welcomesection';
import Competitors from '../components/competitors';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<OurProducts/>}
      {<Banners images={['images/asset 13.jpeg']}/>}
      {<Banners images={['images/asset 14.jpeg']}/>}
      {<Banners images={['images/asset 15.jpeg']}/>}
      {<Footer/>}
    </>
  )
}

export default Home
