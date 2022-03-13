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
      name:'Rue Cocaine'
    },
    {
      name:'Maddie Basic Bitch'
    },
    {
      name:'kat fat pornstar'
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