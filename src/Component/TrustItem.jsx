import React from 'react'
import UserImage from "../../Images/UserImage.svg"
import { FaStar } from 'react-icons/fa'
function TrustItem(props) {
  return (
    <div className='Trust-item'>
      <p className='Trust-header'>Testimonials</p>
      <p className='head-line'>Trust our clients</p>
      <div className="Trust-image">
        <img src={UserImage} alt="user image " />
      </div>
      <p className='Trust-Username'><span>Mark Smith  </span> / Travel Enthusiast</p>
      <div className='Stars-container'>
        <FaStar className='Stars' />
        <FaStar className='Stars' />
        <FaStar className='Stars' />
        <FaStar className='Stars' />
        <FaStar className='Stars' />
      </div>
      <p className='Trust-descreption'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
      in a piece of classical Latin literature from 45 BC.</p>
    </div>
  )
}

export default TrustItem