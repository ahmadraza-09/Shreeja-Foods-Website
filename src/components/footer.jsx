import React from 'react'
import '../css/footer.css';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
            <div class="footer-col">
                <img src="images/asset 0.png" alt="" />
                <p>Healthy Food... Healthy Life...</p>
                <div className="contact-col">
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>
                          Reg.Off: 205,BlockA,Capital Tower,Frazer Road,Patns-800001.
                          <br />
                          <br />
                          Factory: Near Krishna Niketan School,Jakariyapur,Patna-800007.
                        </p>
                    </p>
                </div>
                <div className="contact-col">
                    <p><i class="fa-solid fa-phone-volume"></i><a href="tel:8102254452" target='_blank'>+91 8102254452</a></p>
                    <p><i class="fa-solid fa-envelope"></i><a href="mailto:shreejamasale@gmail.com" target='_blank'>shreejamasale@gmail.com</a></p>
                </div>
                <div className="contact-col">
                    <p>
                        <i class="fa-regular fa-clock"></i>
                        <p>Mon – Sun: 10:30 am – 06.00 pm</p>
                    </p>
                </div>
            </div>
            <div class="footer-col">
                <h4>menu</h4>
                <a onClick={() => {navigate('/')}}>home</a>
                <a onClick={() => {navigate('/about')}}>about</a>
                <a onClick={() => {navigate('/shop')}}>shop</a>
                <a onClick={() => {navigate('/blog')}}>blog</a>
                <a onClick={() => {navigate('/gallery')}}>gallery</a>
                <a onClick={() => {navigate('/contact')}}>contact</a>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <a >FAQ</a>
                <a>shipping</a>
                <a>privacy policy</a>
                <a>payment options</a>
            </div>
            <div class="footer-col">
                <h4>Connect With Us</h4>
                <div class="social-links">
                    <a><i class="fab fa-facebook-f"></i></a>
                    <a><i class="fab fa-twitter"></i></a>
                    <a><i class="fab fa-instagram"></i></a>
                    <a><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div className="news-letter">
                    <input type="text"  placeholder='Enter your E-Mail'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>

        <div className="footer-copyright">
            <div className="footer-copyright-left">
                <p>Copyright © 2024</p>
            </div>

            <div className="footer-copyright-right">
                Shreeja Foods & Spices Pvt Ltd. All rights reserved.
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
