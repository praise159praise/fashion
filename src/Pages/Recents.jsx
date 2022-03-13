import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Recents = () => {
  const displayed = [
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      liked: false

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      liked: false

    },
  ]
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>Recents</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} liked={e.liked} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Recents