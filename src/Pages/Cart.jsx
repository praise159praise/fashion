import React from 'react'
import '../styles/cart.css'
import { IoMdClose } from 'react-icons/io'
import Footer from '../components/Footer'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import img2 from '../assets/images/2.png'



export const CartItem = () => {
  return (
    <div className='cartitem'>
      <img src={img2} alt="" className='item-img'/>
      <div className="item-desc">
        <div className="item-name">Mens Clothing </div>
        <div className="item-amount">8</div>
      </div>
      <div className="item-price">5600 <span>NGN</span></div>
    </div>
  )
}

const Cart = () => {
  const cartItems = [
    {
      name:'Mens clothing 1',
      image:'',
      quantity:1,
      amount:4500
    },
    {
      name:'Mens clothing 1',
      image:'',
      quantity:1,
      amount:9500

    },
    {
      name:'Mens clothing 1',
      image:'',
      quantity:1,
      amount:400

    }
  ]
  return (
    <>
    <Link to="/cart"><div className='cat-recent'><span>CART</span></div></Link>
      <div className='cart'>
        <div className="image">
          <div className="heading">Your shopping cart</div>
          <CartItem/>
        </div>
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