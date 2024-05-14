import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

import '../css/hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='hero'>
        <Swiper 
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        style={{ maxWidth: '100%', minWidth: '300px' , padding: '0px 0px' }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
            
          }
        }}
      >
        <SwiperSlide>
          <div className='slider-card'>
            <div className="slider-card-content card-content1">
                <h3>Raw <span>makhana</span></h3>
                <h2>Raw Makhana</h2>
                <p>
                  Tried these foxnuts and they are truly true to their word. Organic and yummy.
							    A must try for everyone looking for healthy munching options.
                </p>
                <button onClick={() => {navigate('/shop')}}>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card2'>
            <div className="slider-card-content card-content2">
                <h3>Dry <span>& Fruits</span></h3>
                <h2>Dry Fruits</h2>
                <p>
                  "Dry fruits: Energize your day with nature's bounty. Bursting with sweetness and vitality, 
							    our Dry Fruits are a delicious boost of natural goodness. From sunrise to sunset, savor the freshness of every bite."
                </p>
                <button onClick={() => {navigate('/shop')}}>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card3'>
            <div className="slider-card-content card-content3">
                <h3>Our PremiumSpices</h3>
                <h2>Our Premium Spices</h2>
                <p>
                  "Spice up your life with our vibrant array of flavors! From the fiery kick of chili to the aromatic 
                  allure of cinnamon, our spices add depth and excitement to every dish. Elevate your 
                  culinary creations and embark on a journey of tantalizing tastes with our premium selection of spices."
                </p>
                <button onClick={() => {navigate('/shop')}}>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero
