import React from 'react';
import '../css/welcome.css';

const WelcomeSection = () => {

    return (
        <>
            <div className="welcome-section">
                <h3>Naturally Processed</h3>
                <h2>WELCOME TO SHREEJA FOODS & SPICES</h2>
                <div className="welcome-cards">
                    <div className="welcome-card">
                        <div className="image-container">
                            <img src="images/asset 6.png" alt="" className="first-image" />
                            <img src="images/asset 5.png" alt="" className="second-image"/>
                        </div>
                        <h3>100% NATURAL</h3>
                        <p>"100% natural" processed food product, our product are processes naturally 'i.e' without adding any adulteration,</p>
                    </div>
                    <div className="welcome-card">
                        <div className="image-container">
                            <img src="images/asset 8.png" alt="" className="first-image" />
                            <img src="images/asset 7.png" alt="" className="second-image" />
                        </div>
                        <h3>HIGHLY NUTRITIVE</h3>
                        <p>Our products are full of natural nutrition.</p>
                    </div>
                    <div className="welcome-card" >
                        <div className="image-container">
                            <img src="images/asset 10.png" alt="" className="first-image" />
                            <img src="images/asset 9.png" alt="" className="second-image" />
                        </div>
                        <h3>ALWAYS FRESH</h3>
                        <p>"Always fresh" typically denotes products or goods that are consistently new or recently made and are fresh in nature at all time.</p>
                    </div>
                    <div className="welcome-card">
                        <div className="image-container">
                            <img src="images/asset 12.png" alt="" className="first-image" />
                            <img src="images/asset 11.png" alt="" className="second-image" />
                        </div>
                        <h3>FOOD SAFETY</h3>
                        <p>Overall, food safety is essential for protecting consumers from foodborne illnesses and ensuring that the food supply is safe, wholesome, and of high quality.We are FSSAI, ISo 9001:2008 ans HACCP Certified</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeSection;
