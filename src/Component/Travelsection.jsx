import React from 'react'
import "../App.css"
import Thegirl from "../../Images/Thegirl.svg"
function Travelsection() {
  return (
    <div className='travel-section'>
      <div className='travel-section-img'>
        <img src= {Thegirl}  alt="" />
      </div>
      <div className='travel-section-content'></div>
    </div>
  )
}

export default Travelsection