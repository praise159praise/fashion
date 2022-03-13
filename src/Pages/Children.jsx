import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Children = () => {
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
      <Link to="/children"><div className='cat-recent'><span>Children</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} liked={e.liked}/>)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Children