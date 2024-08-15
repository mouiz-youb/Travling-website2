import React from 'react'

function SmalCard(props) {
  return (
    <div>
        <p style={{fontSize :"20px",fontWeight:"bolder"}}> {props.number} </p>
        <p> {props.text} </p>
    </div>
  )
}

export default SmalCard