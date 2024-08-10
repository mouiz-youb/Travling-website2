import React from 'react'
import { FaStar } from 'react-icons/fa'

function CartItem(props) {
  return (
    <div className='card-item-explore'>
      <div className='card-item-explore-img'>
        <img src= {props.img} alt="image card for explore" className='img-explore'/>
      </div>
      <div className='card-item-explore-content'>
        <div className='card-item-explore-content-top'>
          <div>
            <p> {props.text1} </p>
            <p> {props.text2} </p>
          </div>
          <div>
            <p> {props.text3} </p>
          </div>
        </div>
        <div className='card-item-explore-content-bottom'>
          <p style={{color:"rgba(0, 0, 0, 0.307)"}}> {props.text4} </p>
          <div>
            <p> {props.text5} </p>
            <FaStar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem