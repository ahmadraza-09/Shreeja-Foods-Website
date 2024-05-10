import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [navbarsection, setNavbarSection] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

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


    return (
        <>
            <div className={`header ${navbarsection || location.pathname !== '/' ? 'active background ' : ''}`}>
                <div className="navbar">
                    <input type="checkbox" id='check' checked={showMenu} onChange={toggleMenu}/>

                    <div className="logo" >
                        <img src="images/asset 0.png" alt="" onClick={() => {navigate('/')}}/>
                    </div>

                    <div className={`menu ${showMenu ? 'show' : ''}`}>
                        <li onClick={() => {navigate('/')}} className={`${location.pathname === '/' ? 'selected' : ''}`}>Home</li>
                        <li onClick={() => {navigate('/about')}} className={`${location.pathname === '/about' ? 'selected' : ''}`}>About</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </div>

                    <div className="search-cart">
                        <button>Shop Now</button>
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
