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
          Welcome to SUAVE
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quaerat earum sapiente suscipit velit repellendus, sit, accusamus officiis cupiditate necessitatibus porro, error nisi! Atque obcaecati repellat adipisci reiciendis expedita suscipit!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores temporibus molestiae adipisci sequi architecto officiis obcaecati explicabo tenetur quis? Minima quae debitis eum labore deleniti officia exercitationem tenetur unde.
        </div>
        <Link to = '/recents'><div className="button"><span>Browse our catalogue</span></div></Link>
      </div>
    </div>
  )
}

export default Background