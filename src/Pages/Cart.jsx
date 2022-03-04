import React from 'react'
import '../styles/cart.css'
import { IoMdClose } from 'react-icons/io'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <>
      <div className='cart'>
        <div className="image"></div>
        <div className="info">
          <div className="top"><p>Cart</p>  <IoMdClose /></div>
          <div className="cart-item">
            <div className="image"></div>
            <div className="name"></div>

            <div className="desc">
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Cart