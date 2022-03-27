import React from 'react'
import '../styles/background.css'
import bg1 from '../assets/video/bg1.mp4'
import { Link } from 'react-router-dom'
const Background = () => {
  return (
    <div className="video">
      <video autoPlay loop>
        <source src={bg1} type="video/mp4" />
      </video>
      <div className="content">
        <div className="name">
          This is SUAVE
        </div>
        <div className="desc">
        Suave exists for the love of fashion. We believe in empowering individuality. Our mission is to be the global platform to lessen the gap between fashion designers and clients. Shoppers, look through the amazing collections and to our beautiful and dutiful designers, let your imagination run wild!!
        </div>
        <Link to = '/recents'><div className="button"><span>Browse our catalogue</span></div></Link>
      </div>
    </div>
  )
}

export default Background