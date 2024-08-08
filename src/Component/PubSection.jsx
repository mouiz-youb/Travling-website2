import React from 'react'
import "../App.css"
import object from "../../Images/object.svg"
import groupe1 from "../../Images/groupe1.svg"
import groupe2 from "../../Images/groupe2.svg"
import groupe3 from "../../Images/groupe3.svg"
import groupe4 from "../../Images/groupe4.svg"
import groupe5 from "../../Images/groupe5.svg"

function PubSection() {
  return (
    <div className='pub-section'>
      <div className='top-arrow'>
        <img src= {object} alt="" className='top-arrow-img'/>
      </div>
      <div className='pub-logos'>
        <img src= {groupe1} alt="groupe images" className='img-gourpe' />
        <img src= {groupe2} alt="groupe images" className='img-gourpe' />
        <img src= {groupe3} alt="groupe images" className='img-gourpe' />
        <img src= {groupe4} alt="groupe images" className='img-gourpe' />
        <img src= {groupe5} alt="groupe images" className='img-gourpe' />
      </div>
    </div>
  )
}

export default PubSection