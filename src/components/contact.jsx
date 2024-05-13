import React from 'react'
import '../css/contact.css';

const Contact = () => {
  return (
    <>
    <div className="contact-section">
        <div className="about-banner contact-banner">
          <img src="images/banner2.jpg" alt="" />
        </div>

        <div className="contact">
            <div className="contact-image">
                <img src="images/contact-img.png" alt="" />
            </div>
            <div className="contact-form">
                <form className='contact-user-form'>
                    <h2>Contact</h2>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="text" placeholder='Mobile Number'/>
                    <textarea typeof='text' cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Send<i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>

        <div className="contact-boxes">
          <div className="contact-box">
            <div className="contact-box-right">
              <p><i class="fa-solid fa-location-dot"></i>Reg.Off: 205,BlockA,Capital Tower,Frazer Road,Patns-800001.</p>
              <p><i class="fa-solid fa-location-dot"></i>Reg.Off: 205,BlockA,Capital Tower,Frazer Road,Patns-800001.</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-right">
              <a href="tel:8102254452" target='_blank'><i class="fa-solid fa-phone-volume"></i>+91 8102254452</a>
              <a href="mailto:shreejamasale@gmail.com" target='_blank'><i class="fa-solid fa-envelope"></i>shreejamasale@gmail.com</a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact
