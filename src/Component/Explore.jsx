import React from 'react'
import "../App.css"
import Cart from './Cart'
import Button from "./Button"
function Explore() {
  return (
    <div className='explore'>
      <div className='header-explore'>
        <div className='left-side-header-explore'>
          <p>Top Destination</p>
          <p>Explore top destination</p>
        </div>
        <Button/>
      </div>
      <div  className='content-explore-container'>
        <Cart/>
      </div>
    </div>
  )
}

export default Explore
// import { FaStar } from "react-icons/fa";
// import { FaArrowLeft,  FaArrowRight} from 'react-icons/fa'