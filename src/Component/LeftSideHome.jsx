import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
function LeftSideHome() {
  return (
    <div className='left-side-home'>
        <div className="left-side-home1-content">
            <div className='bag-container'>
                <p className='bag-text'> Explore the world </p>
                <IoBagHandle className='bag-style'/>
            </div>
        </div>
        <div className="left-side-home2-content">
            <p className='text-home'>Travel <span>top</span></p>
            <p className='text2-home'>destination of</p>
            <p className='text-home'>the world</p>
        </div>
        <div className="left-side-home3-content">
            <p>We always make our customer happy by providing
            as many choices as possible </p>
        </div>
        <div className="left-side-home4-content">
            <div className='left-btn-home'><button>Get Started</button></div>
            <div className='right-btn-home'>
                <div>
                    <FaPlayCircle className='icon-play'/>
                    <p>Watch Demo</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSideHome