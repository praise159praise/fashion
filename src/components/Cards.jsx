import '../styles/cards.css'
import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db, storage } from '../fireConfig'
import Footer from '../components/Footer'
import '../styles/user.css'
import { async } from '@firebase/util'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { FaCross, FaFacebookF, FaInstagram, FaSadCry, FaTwitter } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import img2 from '../assets/images/2.png'
import { Link } from 'react-router-dom'
import { FaHeart, FaOpencart, FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'


 
export const Card = (props) => {
  const [userdata, setUserData] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    getUserData()
    setName(props.name)
  })
  const getUserData = async () => {
    const userRef = await doc(db, 'userdata', await auth.currentUser.uid)
    const data = await getDoc(userRef)
    setUserData(data.data())
  }
  const handleAddToCart = async(id)=>{
      const data = await doc(db, 'clothes', id)
    if(userdata.cart){
      await updateDoc(doc(db,'userdata', auth.currentUser.uid), {cart : [...userdata.cart, data]})
    } else{
      console.log(data)
      await updateDoc(doc(db,'userdata', auth.currentUser.uid), {cart : [data]})
      console.log('added to cart')
    }
      
  }
  return (
    <div className='card'>
      <img src={props.img} alt="" className='card-image' />
      <div className='below'>
        <div className='vendor-image'></div>
        <div className='text-info'>
          <div className='vendor'>{props.name}</div>
          <div className='date'>{props.date}</div>
          
        </div>
        {props.liked ? <FaHeart color='red' /> : <FaRegHeart />}
        <FiShoppingCart onClick={()=>{
          handleAddToCart(props.id)
        }}/>

      </div>
      
    </div>
  )
}

const Cards = () => {
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'>Recents</div></Link>
      <div className='card-container'>
        
      </div>
    </div>
  )
}

export default Cards 
