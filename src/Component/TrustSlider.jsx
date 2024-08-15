import React from 'react'
import TrustItem from './TrustItem'
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa'
function TrustSlider() {
  return (
    <div className='Trust-slider'>
        <div className='Trust-icon1'>
            <div className='container-icon-trust'>
                <FaArrowLeft className='icon-arrow'/>
            </div>
        </div>
        <div className='Trust-slider-item'>
            <TrustItem text= "one" />
            <TrustItem text= "two" />
            <TrustItem text= "three" />
            <TrustItem text= "four" />
        </div>
        <div className='Trust-icon2'>
            <div className='container-icon-trust2'>
                <FaArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default TrustSlider