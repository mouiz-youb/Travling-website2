import React from 'react'
import "../App.css"
import corner from "../../Images/corner.svg"
import { MdOutlineEmail } from "react-icons/md";
import OBJECTS from "../../Images/OBJECTS.svg"
function Subscribe() {
  return (
    <div className='subscribe'>
      <img src= {corner} alt="" className='corner' />
      <div className='subscribe-container'>
        <p className='our-text'>subscribe to our newsletter</p>
        <h1 className='h1-sub'>Prepare yourself & let’s explore the beauty of the world
        Your Email</h1>
        <div className="contaianer-input-sub">
          <div className="inputcontent">
            <div className='email-icon'>
              <MdOutlineEmail className='iconE' />
            </div>
            <input type="email" placeholder="Your Email" />
          </div>
          <button className='btn-subscribe'>Subscribe</button>
        </div>
      </div>
      <img src= {OBJECTS} alt="" className='object-img' />
    </div>
  )
}

export default Subscribe