import React from 'react'
import desImg from '../assets/images/2.png'
import '../styles/designer.css'

const Designer = (props) => {
  return (
    <div className='designer'>
        <img className="image" src={desImg}></img>
        <div className="name">{props.name}</div>
        <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto quod veniam ut. Ea inventore, natus, soluta nihil quo laboriosam hic ullam ipsa porro, cupiditate sapiente animi reprehenderit assumenda earum.</div>
    </div>
  )
}

export default Designer