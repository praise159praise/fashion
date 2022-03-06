import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Women = () => {
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
      <Link to="/women"><div className='cat-recent'><span>Women</span></div></Link>
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

export default Women