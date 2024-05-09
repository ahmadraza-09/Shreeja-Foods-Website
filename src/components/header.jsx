import React, { useState } from 'react';
import '../css/header.css';

const Header = () => {
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
            <div className={navbarsection ? 'header active' : 'header'}>
                <div className="navbar">
                    <input type="checkbox" id='check' checked={showMenu} onChange={toggleMenu}/>

                    <div className="logo">
                        <img src="images/asset 0.png" alt="" />
                    </div>

                    <div className={`menu ${showMenu ? 'show' : ''}`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </div>

                    <div className="search-cart">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-cart-plus"></i>
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
