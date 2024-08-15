import React from 'react'
import "../App.css"
import LogoTravel from "../../Images/LogoTravel.svg"
import { FaFacebookF ,FaTwitter,FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
      <div className="left-footer-content">
        <div className="left-content1-foooter">
          <img src= {LogoTravel} alt="" className='logo-in-footer' />
          <p className='travel-text-footer'>Travlog</p>
        </div>
        <div className="left-content2-foooter">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC.
        </div>
        <div className="left-content3-foooter">
          <div className="icon-social-media">
            <FaFacebookF className='icon-facebook'/>
          </div>
          <div className="icon-social-media">
            <FaTwitter className='icon-facebook'/>
          </div>
          <div className="icon-social-media">
            <FaYoutube className='icon-facebook'/>
          </div>
        </div>
      </div>
      <div className="right-footer-content">
        <div className="right-content1-footer">
          <p className='bold'>Company</p>
          <p>About</p>
          <p>career</p>
          <p>mobile</p>
        </div>
        <div className="right-content2-footer">
          <p className='bold'>Contact</p>
          <p>Why Travlog?</p>
          <p>FAQ’s</p>
          <p>blog</p>
        </div>
        <div className="right-content3-footer">
          <p className='bold'>Meet us</p>
          <p>+00 92 1234 56789</p>
          <p>info@travlog.com</p>
          <p>205. R Street, New York</p>
          <p>BD23200</p>
        </div>
      </div>
    </div>
  )
}
export default Footer