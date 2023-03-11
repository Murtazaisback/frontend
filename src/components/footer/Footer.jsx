import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import LOGO from "../../assest/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className="Footer_main">
      <div className="footer__newsletter">
        <div className="news-text">
        Want to receive exclusive hotel offers? Subscribe to our newsletter!
        </div>
        <form action="newsletter">
          <input type="email" placeholder="Email address"  className="news-input"/>
          <button type="submit" className="news-btn">Subscribe</button>
        </form>
      </div>
      <div className="footer__location">
        <div className="location-p">
        Logo the it's locations have to right
        <div className="socials">
          <FaFacebook className="fasize"/>
          <BsTwitter/>
          <FaInstagram/>
          <FaYoutube/>
        </div>
        </div>
        <div className="location__drop">
        <form action="#">
                    <select name="language" id="language_set">
                        <option value="" selected>Select language</option>
                        <option value="" >Pakistan - urdu</option>
                        <option value="" >KSA - Arabic</option>
                    </select>
                </form>
        </div>
      </div>
      <div className="footer__menulist">
        <div className="footer_list">
          <ul>
            <li><a href="">Company</a></li>
            <li><a href="">Jobs</a></li>
            <li><a href="">Prees</a></li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li><a href="">Mobile apps - searching on the go</a></li>
            <li><a href="">Logo business Studio</a></li>
          </ul>

        </div>
        <div className="footer_list">
          <ul>
            <li><a href="">Help</a></li>
            <li><a href="">Learn How we Work</a></li>
            <li><a href="">Treams and conditions</a></li>
            <li><a href="">Legal informations</a></li>
            <li><a href="">Do not sell my personal Information</a></li>
            <li><a href="">Privacy notice</a></li>
            <li><a href="">Cyber security</a></li>
          </ul>

        </div>
      </div>
      <div className="footer__logo">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <p>Copyright 2023 Company | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer