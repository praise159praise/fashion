import React from 'react'
import Designer from '../components/Designer'
import { Link } from 'react-router-dom'

import '../styles/designer.css'

const Designers = () => {
  const designers = [
    {
      name:'Elordi Jacobs'
    },
    {
      name:'James Charles'
    },
    {
      name:'Hunter Schafer'
    },
    {
      name:'Euphoria Babies'
    },
    {
      name:'Precious fagbohun'
    },
    {
      name:'Pelumi Bamgbose'
    },
    {
      name:'Aruegbe franklin'
    },
    
  ]
  return (
    <>
      <Link to="/designers"><div className='cat-recent'><span>Designers</span></div></Link>

      <div className='designers'>
        <Designer name='lol' />
        {
          designers.map((e, index) =>
            <Designer name={e.name} />)
        }
      </div>
    </>
  )
}

export default Designers