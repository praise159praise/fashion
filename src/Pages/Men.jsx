import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Men = () => {
  const displayed = [
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
      img:'https://images.unsplash.com/photo-1535530705774-695729778c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
      liked: false

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
      liked: true
    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1583167465341-639b41dfd97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ajah Stephanie',
      date: '20 days ago',
      img:'https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1536129808005-fae894214c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: false

    },
    {
      vendorName: 'Phillips Praise',
      date: '8 mins ago',
      img:'https://images.unsplash.com/photo-1520013135029-3c324dc527a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: false

    },
  ]
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>Men</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            <Card name={e.vendorName} date={e.date} img={e.img} />)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Men