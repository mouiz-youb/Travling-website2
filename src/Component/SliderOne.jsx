import React from 'react'
import "../App.css"
import SliderContent from './SliderContent'
function SliderOne() {
  return (
    <div className='slider-one'>
      <div className='left-slider-one'>
        <div className="container-services">
          <p className='top-text-container-services'>Services</p>
          <p className='bottom-text-container-services'>Our top value </p>
          <p className='bottom-text-container-services'>categories for you</p>
        </div>
      </div>
      <SliderContent/>
    </div>
  )
}

export default SliderOne