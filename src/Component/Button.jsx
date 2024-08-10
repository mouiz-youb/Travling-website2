import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Button() {
  return (
    <div className='right-side-header-explore'>
      <div className='container-btn-explore'>
        <FaArrowLeft/>
      </div>
      <div className='container-btn-explore1'>
        <FaArrowRight className='bnt-icon-explore'/>
      </div>
    </div>
  )
}

export default Button