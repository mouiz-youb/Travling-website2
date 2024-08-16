import React, { useState } from 'react'
import TrustItem from './TrustItem'
import { FaArrowLeft , FaArrowRight } from 'react-icons/fa'
function TrustSlider() {
    const [slider ,setSlider]=useState(0)
    const NextSlider =()=>{
        if(slider=== 3 ){
            setSlider(0)
        }
        else{
            setSlider(prevSlider =>prevSlider +1)
        }
        }
        const PrevoisSlider =()=>{
        if(slider===0){
            setSlider(3)
        }
        else{
            setSlider(prevSlider =>prevSlider -1)
        }
        }
        const sliderItem =[
            {
                text :"one"
            },
            {
                text :"two"
            },
            {
                text :"three"
            },
            {
                text :"four"
            },
        ]
  return (
    <div className='Trust-slider'>
        <div className='Trust-icon1'>
            <div className='container-icon-trust' onClick={PrevoisSlider}>
                <FaArrowLeft className='icon-arrow'/>
            </div>
        </div>
        <div className='Trust-slider-item'>
            {sliderItem.map((item,index)=>{
                return <TrustItem key={index} item={item} text ={item.text} className ={slider === index ?"Trust-item":"trust-hide"} />
            })}
            {/* <TrustItem text= "one" />
            <TrustItem text= "two" />
            <TrustItem text= "three" />
            <TrustItem text= "four" /> */}
        </div>
        <div className='Trust-icon2'>
            <div className='container-icon-trust2' onClick={ NextSlider}>
                <FaArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default TrustSlider