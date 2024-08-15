import React from 'react'
import "../App.css"
import Thegirl from "../../Images/Thegirl.svg"
import ContentTravel from './ContentTravel'
function Travelsection() {
  return (
    <div className='travel-section'>
      <div className='travel-section-img'>
        <img src= {Thegirl}  alt="" />
      </div>
      <ContentTravel/>
    </div>
  )
}

export default Travelsection