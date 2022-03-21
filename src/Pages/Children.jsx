import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Children = () => {
  const displayed = [
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1560880831-eb990ad24b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1502808777105-c5f7b639feae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1487033858121-f6f74a05c1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBmYXNoaW9ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      liked: false

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1617627057301-7b03d1097672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1502451885777-16c98b07834a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1543854704-2b1b011701e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1541580620-23a640b30338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1529776292731-c2246c65df5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      liked: false

    },
  ]
  return (
    <div className='main-container'>
      <Link to="/children"><div className='cat-recent'><span>Children</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} liked={e.liked} img = {e.img}/>)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Children