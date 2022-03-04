import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Recents = () => {
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
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'>Recents</div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Recents