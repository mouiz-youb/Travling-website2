import React from 'react'
import photo1 from "../../Images/photo1.svg"
import photo2 from "../../Images/photo2.svg"
import photo3 from "../../Images/photo3.svg"
import BACKGROUND from "../../Images/BACKGROUND.svg"
function ImageOffer() {
  return (
    <div className='offer-section-img'>
        <img src={photo1} alt="" className='photo1' />
        <img src={photo2} alt="" className='photo2' />
        <img src={photo3} alt="" className='photo3' />
        <img src={BACKGROUND} alt=""  className='BACKGROUND'/>
    </div>
  )
}

export default ImageOffer