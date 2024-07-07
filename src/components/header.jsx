import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [navbarsection, setNavbarSection] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showCeoDropdown, setShowCeoDropdown] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbarSection(true);
        } else {
            setNavbarSection(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleCeoDropdown = () => {
        setShowCeoDropdown(!showCeoDropdown);
    };

    return (
        <>
            <div className={`header ${navbarsection || location.pathname !== '/' ? 'active background ' : ''}`}>
                {/* <div className={`navbar-banner ${navbarsection ? 'active background ' : ''}`}>
                    <div className="left-banner">
                        <div className="contact">
                            <i class="fa-solid fa-phone-volume"></i>
                            <a href="tel:8102254452" target="_blank">+91 8102254452</a>
                        </div>
                        |
                        <div className="email">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="mailto:Shreejamasale@gmail.com" target="_blank" >Shreejamasale@gmail.com</a>
                        </div>
                    </div>
                    <div className="right-banner"></div>
                </div> */}

                <div className="navbar">
                    <input type="checkbox" id='check' checked={showMenu} onChange={toggleMenu}/>

                    <div className="logo" >
                        <img src="images/asset 0.png" alt="" onClick={() => {navigate('/')}}/>
                    </div>

                    <div className={`menu ${showMenu ? 'show' : ''}`}>
                        <li onClick={() => {navigate('/')}} className={`${location.pathname === '/' ? 'selected' : ''}`}>Home</li>

                        <li className='about-dropdown'>
                          <h3 onClick={() => {navigate('/about')}} className={`${location.pathname === '/about' ? 'selected' : ''}`}>
                            About <i className="fa-solid fa-angle-down" onClick={toggleCeoDropdown}></i>
                          </h3>
                          {showCeoDropdown && (
                              <h3 className='ceo-dropdown' onClick={() => {navigate('/our-ceo')}}>Our CEO's</h3>
                          )}
                        </li>

                        <li onClick={() => {navigate('/shop')}} className={`${location.pathname === '/shop' ? 'selected' : ''}`}>Shop</li>
                        <li onClick={() => {navigate('/blog')}} className={`${location.pathname === '/blog' ? 'selected' : ''}`}>Blog</li>
                        <li onClick={() => {navigate('/gallery')}} className={`${location.pathname === '/gallery' ? 'selected' : ''}`}>Gallery</li>
                        <li onClick={() => {navigate('/contact')}} className={`${location.pathname === '/contact' ? 'selected' : ''}`}>Contact</li>
                    </div>

                    <div className="search-cart">
                        <i className="fa-solid fa-magnifying-glass" onClick={() => {navigate('/shop')}}></i>
                        <button onClick={() => {navigate('/shop')}}>Shop Now</button>
                        <label className={showMenu} htmlFor="check">
                            {showMenu ? 
                              <i className="fa-solid fa-close"></i> 
                              : 
                              <i className="fa-solid fa-bars"></i>
                            }
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
