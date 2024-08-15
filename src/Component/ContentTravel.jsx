import React from 'react'
import SmalCard from "./SmalCard"
import ticket from '../../Images/ticket.svg'
function ContentTravel() {
  return (
    <div className='travel-section-content'>
      <div className='travel-section-content-left'>
        <div className='header-travel-section-content'>
          <p>Travel Point</p>
          <h1>We helping you find your dream location</h1>
        </div>
        <div className='descreption-travel-section-content'>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className='card-travel-section-content'>
        <SmalCard number ="500+"
        text = "Premium Airlines"/>
        <SmalCard number ="100"
        text = "Luxury Hotel"/>
        <SmalCard number ="7"
        text = "Holiday Package"/>
        <SmalCard number ="1k"
        text = "Happy Customer"/>
        </div>
      </div>
      <div className='travel-section-content-img'>
        <div>
          <img src= {ticket} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ContentTravel