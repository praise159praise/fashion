import React from 'react'
import '../styles/cards.css'
import img1 from '../assets/images/1.png'
import img3 from '../assets/images/3.png'
import img2 from '../assets/images/2.png'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

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
      < div className='card-image'></div>
      <div className='below'>
        <div className='vendor-image'></div>
        <div className='text-info'>
          <div className='vendor'>{props.name}</div>
          <div className='date'>{props.date}</div>
          {props.liked ? <FaHeart color='red' /> : <FaRegHeart />}
        </div>
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
            <Card name={e.vendorName} date={e.date} />)
        }
      </div>
    </div>
  )
}

export default Cards 
