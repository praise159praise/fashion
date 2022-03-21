import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import img2 from '../assets/images/2.png'

import Footer from '../components/Footer'
const Recents = () => {
  const displayed = [
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80',
      liked: false

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      liked: false

    },
  ]
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>Recents</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} liked={e.liked} img={e.img} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Recents