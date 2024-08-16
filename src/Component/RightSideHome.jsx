import React from 'react'
import layer from "../../Images/layer.svg"
import Rectangle1 from "../../Images/Rectangle1.svg"
import Rectangle2 from "../../Images/Rectangle2.svg"
import Rectangle3 from "../../Images/Rectangle3.svg"
import Frame1 from "../../Images/Frame1.svg"
import Frame2 from "../../Images/Frame2.svg"
import Frame3 from "../../Images/Frame3.svg"
function RightSideHome() {
  return (
    <div className='right-side-home'>
        <img src= {layer} alt=""  className='layer-img'/>
        <img src= {Rectangle1} alt="" className='Rectangle1' />
        <img src= {Rectangle2} alt="" className='Rectangle2' />
        <img src= {Rectangle3} alt="" className='Rectangle3' />
        <img src= {Frame1} alt="" className='Frame1' />
        <img src= {Frame2} alt="" className='Frame2' />
        <img src= {Frame3} alt="" className='Frame3' />
    </div>
  )
}

export default RightSideHome