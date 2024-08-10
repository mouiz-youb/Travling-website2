import React from 'react'
import "../App.css"
import CartItem from './CartItem'
import Rectangle6 from "../../Images/Rectangle6.svg"
import Rectangle7 from "../../Images/Rectangle7.svg"
import Rectangle8 from "../../Images/Rectangle8.svg"
function Cart() {
  return (
    <div className='cart-container'>
      <CartItem
      img={Rectangle6}
      text1="Paradise Beach,"
      text2="Bantayan Island"
      text3="$550.16"
      text4="Rome, Italy"
      text5="4.8" />
      <CartItem 
      img={Rectangle7}
      text1="Ocean with full of"
      text2="Colors"
      text3="$20.99"
      text4="Maldives"
      text5="4.5" />
      <CartItem 
      img={Rectangle8}
      text1=" Mountain View,"
      text2="Above the cloud"
      text3="$150.99"
      text4="United Arab Emeries "
      text5="5,0" />
    </div>
  )
}

export default Cart