import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Leftbtn from './Leftbtn'
import Rightbtn from './Rightbtn'

function Button() {
  return (
    <div className='right-side-header-explore'>
      <Leftbtn/>
      <Rightbtn/>
    </div>
  )
}

export default Button