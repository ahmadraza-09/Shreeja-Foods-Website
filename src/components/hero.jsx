import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useNavigate } from "react-router-dom";

import '../css/hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {

//   const navigate = useNavigate();

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
            <div className="slider-card-content">
                <h3>Raw <span>makhana</span></h3>
                <h2>Raw Makhana</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint optio.</p>
                <button>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card2'>
            <div className="slider-card-content">
                <h3>Dry <span>& Fruits</span></h3>
                <h2>Dry Fruits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint optio.</p>
                <button>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card3'>
            <div className="slider-card-content">
                <h3>Our PremiumSpices</h3>
                <h2>Our Premium Spices</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint optio.</p>
                <button>Shop Now <i class="fa-solid fa-angles-right"></i></button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero
