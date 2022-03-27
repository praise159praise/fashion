import React from 'react'
import desImg from '../assets/images/2.png'
import '../styles/designer.css'

const Designer = (props) => {
  return (
    <div className='designer'>
        <img className="image" src={props.img} alt=''></img>
        <div className="name">{props.name}</div>
        <div className="desc">{props.desc}</div>
    </div>
  )
}

export default Designer