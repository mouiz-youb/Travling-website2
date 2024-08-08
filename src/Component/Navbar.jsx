import React from 'react'
import "../App.css"
import LogoTravel from "../../Images/LogoTravel.svg"
function Navbar() {
  return (
    <div className='nav-bar'>
      <div className='left-side-nav-bar'>
        <img src= {LogoTravel} alt="logo" className='logo' />
        <p className='logo-text'>Travlog</p>
      </div>
      <div className='middel-side-nav-bar'>
        <li>Home</li>
        <li>Discover</li>
        <li>Special Deals</li>
        <li>Contact</li>
      </div>
      <div className='right-side-nav-bar'>
        <button className='btn-log-in'>log in</button>
        <button className='btn-sign-up'>sign up </button>
      </div>
    </div>
  )
}

export default Navbar