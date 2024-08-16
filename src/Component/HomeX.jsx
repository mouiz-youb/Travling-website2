import React from 'react'
import "../App.css"
import LeftSideHome from "./LeftSideHome"
import RightSideHome from "./RightSideHome"
function HomeX() {
  return (
    <div className='home'>
      <div className='circlex'></div>
      <LeftSideHome/>
      <RightSideHome/>
    </div>
  )
}

export default HomeX