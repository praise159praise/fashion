import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Recents = () => {
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
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1536294738309-2fc595e788fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: false

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
  ]
  return (
    <div className='main-container'>
      <Link to="/wishlist"><div className='cat-recent'><span>WishList</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            e.liked && <Card name={e.vendorName} date={e.date} liked={e.liked}/>)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Recents