import React from 'react'
import '../styles/cards.css'

import img2 from '../assets/images/2.png'
import { Link } from 'react-router-dom'
import { FaHeart, FaOpencart, FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

const displayed = [
  {
    vendorName: 'Ajah Stephanie',
    date: '20 days ago'
  },
  {
    vendorName: 'Ahmed Maimuna',
    date: '10 days ago'
  },
  {
    vendorName: 'Phillips Praise',
    date: '8 mins ago'
  },
 
]

export const Card = (props) => {
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
        <FiShoppingCart/>

      </div>
      
    </div>
  )
}

const Cards = () => {
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'>Recents</div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} img = {img2}/>)
        }
      </div>
    </div>
  )
}

export default Cards 
