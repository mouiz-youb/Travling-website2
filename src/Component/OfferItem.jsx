import React from 'react'

function OfferItem(props) {
  return (
    <div className='offer-item-container'>
        <div className='left-offer-item-content' style={{backgroundColor: `${props.color}`}}>
            <img src= {props.img} alt="" />
        </div>
        <div className='right-offer-item-content'>
            <p style={{fontWeight:"bolder"}}> {props.text1} </p>
            <p> {props.text2} </p>
        </div>
    </div>
  )
}

export default OfferItem