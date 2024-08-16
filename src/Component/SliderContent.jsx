import React from 'react'
import "../App.css"
import SliderItem from './SliderItem1'
import destination1 from "../../Images/destination1.svg"
import booking from "../../Images/booking.svg"
import cloudy from "../../Images/cloudy.svg"
function SliderContent() {
  
  return (
    <div className='right-slider-one'>
      <div className='container-slider-one'>
        <SliderItem img={destination1}
        title="Best Tour Guide"
        text1="What looked like a small patch of purple grass, above five feet."/>
        <SliderItem img={booking}
        title="Easy Booking"
        text1="Square, was moving across the sand in their direction."/>
        <SliderItem img={cloudy}
        title="Weather Forecast"
        text1="What looked like a small patch of purple grass, above five feet."/>
        <SliderItem img={destination1}
        title="Best Tour Guide"
        text1="What looked like a small patch of purple grass, above five feet."/>
        <SliderItem img={booking}
        title="Easy Booking"
        text1="Square, was moving across the sand in their direction."/>
        <SliderItem img={cloudy}
        title="Weather Forecast"
        text1="What looked like a small patch of purple grass, above five feet."/>
      </div>
      <div className='circle2'></div>
    </div>
  )
}
export default SliderContent