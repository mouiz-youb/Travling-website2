import React from 'react'

function SliderItem(props) {
  return (
    <div className='slider-one-item'>
        <div className='slider-one-item-img'>
          <img src= {props.img} alt=""  className='img-slider-one'/>
        </div>
        <div className='slider-one-item-text1'>
          <h2>{props.title}</h2>
        </div>
        <div className='slider-one-item-text2'>
          <p> {props.text1}  </p>
        </div>
    </div>
  )
}

export default SliderItem