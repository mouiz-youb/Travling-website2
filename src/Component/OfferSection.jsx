import React from 'react'
import "../App.css"
import OfferItem from './OfferItem'
import location from "../../Images/location.svg"
import calendar from "../../Images/calendar.svg"
import ticket from "../../Images/ticket.svg"
import ImageOffer from './ImageOffer'
function OfferSection() {
  return (
    <div className='offer-section'>
      <div className='offer-section-content'>
        <div className='header-offer-section'>
          <p>Key features</p>
          <p style={{fontWeight:"bolder"}}>We offer best services</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
        <div className='content-offer-section'>
          <OfferItem 
          color = "#FF5722" img ={location} 
          text1= "We offer best services"
          text2= "Lorem Ipsum is not simply random text" />
          <OfferItem 
          color = "#FACD49" img ={calendar} 
          text1= " Schedule your trip"
          text2= "It has roots in a piece of classical" />
          <OfferItem 
          color = "#F85E9F" img = {ticket} 
          text1= "Get discounted coupons"
          text2= "Lorem Ipsum is not simply random text" />
        </div>
      </div>
      <ImageOffer/>
    </div>
  )
}

export default OfferSection
// img ={ticket}
//           text1="Get discounted coupons"
//           text2="Lorem Ipsum is not simply random text"
//           backgroundcolor="#FF5722"