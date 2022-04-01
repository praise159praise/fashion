import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react/cjs/react.development'
//getting various functions that allow us to perform CRUD operatrions on the firestore 
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { auth, db, storage } from '../fireConfig'
import secondsToDhms from '../timeformatter'
const Children = () => {
  const displayed = [
    {
      vendorName: 'Hunter Schafer',
      date: '10 days ago',
      img:'https://www.topweddingsites.com/wedding-blog/wp-content/uploads/2014/06/85a736e3cc9fc996d57aae33fa816c49-1.jpg',
      liked: true
    },
    {
      vendorName: 'Josephine Vernon',
      date: '10 days ago',
      img:'https://images.ctfassets.net/6m9bd13t776q/d3t5F6tcAIKU7zwlVUjfP/396c104c6011d796fe90d4d5a48cc4b0/16-cat-jack-toddler-boy-navy-suit-750x900.jpg?q=75',
      liked: true

    },
    {
      vendorName: 'Alexander Wang',
      date: '8 mins ago',
      img:'https://cdn0.hitched.co.uk/articles/images/2/1/0/1/img_91012/kurta.jpg',
      liked: true

    },
    {
      vendorName: 'Malcom Kelvin',
      date: '20 days ago',
      img:'https://www.dhresource.com/0x0/f2/albu/g5/M00/A9/19/rBVaJFitQvKAcRxoAAQQL9dRt9Q873.jpg',
      liked: true

    },
    {
      vendorName: 'Ahmed Maimuna',
      date: '10 days ago',
      img:'https://images.unsplash.com/photo-1502451885777-16c98b07834a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      liked: true

    },
    {
      vendorName: 'Sara Dominic',
      date: '8 mins ago',
      img:'https://media.boohoo.com/i/boohoo/m5053190780455_cream_xl.jpeg',
      liked: true

    },
  ]
  const [clothes, setClothes] = useState([])
 

  useEffect(()=>{
    getClothes()

  })
  const getClothes = async () => {
    // getting the clothes collection reference 
    const q = collection(db, 'clothes')
    //getting all the documnents in the clothes collection 
    const querySnapshot = await getDocs(q);
    const temp = []

    // querySnapshot is an object that has an docs array that contains all the docs we need ,, we set all the documents and map them into an array then set the clothes state to that array
    setClothes(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))

  }
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>Recents</span></div></Link>
      <div className='card-container'>
        {
          clothes.map((e, index) =>
          <Card name={e.vendorName} date={secondsToDhms(e.createDate.seconds)+' ago'} img={e.picUrl} key = {e.id} id={e.id}/>)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Children