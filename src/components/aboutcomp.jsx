import React from 'react';
import '../css/about.css';
import LaunchedItem from './launcheditem';


const AboutComp = () => {
  const launchedItems = [
    { isLaunched: true, imageUrl: "images/makhana.jpeg", itemName: "Makhana" },
    { isLaunched: true, imageUrl: "images/dryfruits-category.jpg", itemName: "Dry Fruits" },
    { isLaunched: true, imageUrl: "images/spices.jpg", itemName: "Spices" },
    { isLaunched: false, imageUrl: "images/choker-atta.jpg", itemName: "Choker Atta" },
    { isLaunched: false, imageUrl: "images/grain-atta.jpeg", itemName: "Grain Atta" },
    { isLaunched: false, imageUrl: "images/multi-grain-atta.jpg", itemName: "Multi Grain Atta" },
    { isLaunched: false, imageUrl: "images/sattu.jpeg", itemName: "Sattu" },
    { isLaunched: false, imageUrl: "images/besan.jpg", itemName: "Besan" },
    { isLaunched: false, imageUrl: "images/maida.jpeg", itemName: "Maida" },
    { isLaunched: false, imageUrl: "images/suji.jpeg", itemName: "Suji" },
    { isLaunched: false, imageUrl: "images/frozen-pea.jpeg", itemName: "Frozen Peas" },

  ];

  return (
    <>
      <div className="about-section">
        <div className="about-banner">
          <img src="images/banner1.jpg" alt="" />
        </div>

        <div className="about-us">
          <h2>WELCOME TO SHREEJA FOODS & SPICES PRIVATE LIMITED</h2>
          <div className="about-box">
            <div className="image-content">
              <img src="images/dryfruit11.png" alt="" />
              <div className="content">
                <h3>Greetings from Shreeja Foods!</h3>
                <br />
                <p>Shreeja Foods is a premium health food brand and online dry fruit store in India. Established in 2021, we are dedicated to providing quality wholesale dry fruits online that are rich in nutrients and taste. 
                  <br />
                  <br />
                  Our hygienic packaging ensures that each product is carefully sealed to preserve its flavour and freshness. Be it for your personal health goals or luxury gifting solutions, Shreeja Foods simplifies dry fruits online shopping by bringing quality, flavour, and packaging under one roof . 
                  <br />
                  <br />
                  We source all our products from reputed growers and comply with all the standards of the Food Safety and Standards Authority of India (FSSAI) to ensure consistent quality at all times. For those looking to buy dry fruits online, we bring you over 70 different varieties of dry fruits, makhana's, nuts, seeds, and raisins, from traditional seasonings to innovative and flavourful combinations. <br />
                </p>
              </div>
            </div>
          </div>

          <div className="about-box">
            <h2>Why Brand "SHREEJA" ?</h2>
            <div className="image-content">
              <img src="images/dryfruit13.webp" alt="" />
              <div className="content">
                <p><img src="images/check-mark.png" alt="check-mark" /> Maintaining high level of superior quality</p>
                <p><img src="images/check-mark.png" alt="" />Comparatively low rate with maintaining high & standard quality</p>
                <p><img src="images/check-mark.png" alt="" />Food Safety standard complied</p>
                <p><img src="images/check-mark.png" alt="" />Maintains hygiene, taste</p>
                <p><img src="images/check-mark.png" alt="" />Fat free, Gluten Free products </p>
                <p><img src="images/check-mark.png" alt="" />ISO 22000:2018 Certified products</p>
                <p><img src="images/check-mark.png" alt="" />HACCP certified products</p>
                <p><img src="images/check-mark.png" alt="" />No added artificial ingredients</p>
                <p><img src="images/check-mark.png" alt="" />Naturally Processed Food Products</p>
                <p><img src="images/check-mark.png" alt="" />Highly nutritive and medicinal value products</p>
              </div>
            </div>
          </div>

          <div className="about-box">
            <h2>Upcoming Items In Next 3 Years</h2>
            <div className="item-boxes">
              {launchedItems.map((item, index) => (
                <LaunchedItem
                  key={index} 
                  isLaunched={item.isLaunched}
                  imageUrl={item.imageUrl}
                  itemName={item.itemName}
                />
              ))}
            </div>
          </div>

          <div className="about-box">
            <h2>Our Vision & Mission</h2>
            <div className="image-content">
              <div className="image">
                <img src="images/vision-mission.jpeg" alt="" />
              </div>
              <div className="content">
                <div className="vission">
                  <h3>Vision</h3>
                  <p>
                    To be a globally impacting food processing company enriching lives with innovation, integrity and superiority and to be the most trusted, authentic, premium Indian brand, bringing regional taste diversity in all its authenticity and freshness.
                  </p>
                </div>

                <div className="mission">
                  <h3>Mission</h3>
                  <p>
                    To exceed customer expectations in the processing, distribution and marketing of safe, tasty and high-quality packaged food products.
                  </p>
                  <br />
                  <p>
                    To base our operations on values, commitment, experience and knowledge of our people, partners and investors.
                  </p>
                  <br />
                  <p>
                    To create, control and monitor the quality and origin of the products by constant value addition to the base farmers and dealing with the challenges prevailing in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutComp;
