import '../styles/cards.css'
import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db, storage } from '../fireConfig'
import { async } from '@firebase/util'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { FaCross, FaFacebookF, FaInstagram, FaSadCry, FaTwitter } from 'react-icons/fa'
import { IoMdAdd, IoMdRefresh } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import { FaHeart, FaOpencart, FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import '../styles/cart.css'
import { IoMdClose } from 'react-icons/io'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img2 from '../assets/images/2.png'



export const CartItem = (props) => {


  return (
    <div className='cartitem'>
      <img src={props.img} alt="" className='item-img' />
      <div className="item-desc">
        <div className="item-name">{props.name} </div>
      </div>
      <div className="item-price">{props.price} <span>NGN</span></div>

    </div>
  )
}

const Cart = () => {
  const [userdata, setUserData] = useState('')
  const [cart, setCart] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserData()

  })






  const getUserData = async () => {
    const userRef = await doc(db, 'userdata', await auth.currentUser.uid)
    const data = await getDoc(userRef)
    setUserData(data.data())

  }
  const getCartData = async () => {
    const temp = []
    userdata.cart.forEach(async (e) => {
      const data = await getDoc(e)
      temp.push(data.data())
    })
    setCart(temp)

  }
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <>
      <Link to="/cart"><div className='cat-recent'><span>CART</span></div></Link>
      <div className='cart'>
        <div className="image">
          <div className="heading">Your shopping cart</div>
          {
            cart ? cart.map((e) => <CartItem img={e.picUrl} name={e.vendorName} price={e.price} />) : 'nothing in cart'
          }
          <button onClick={() => {
            getCartData()
            console.log(userdata.cart, cart)
          }}><IoMdRefresh/> </button>
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