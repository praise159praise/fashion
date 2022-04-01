import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react/cjs/react.development'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { auth, db, storage } from '../fireConfig'
import secondsToDhms from '../timeformatter'

const Men = () => {
  const [clothes, setClothes] = useState([])
 

  useEffect(()=>{
    getClothes()

  })
  const getClothes = async () => {
    const q = query(collection(db, 'clothes'), where("category", "==", 'men'))
    const querySnapshot = await getDocs(q);
    const temp = []
    setClothes(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))

  }
  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>Men</span></div></Link>
      <div className='card-container'>
      {/* <button onClick={()=>{
          console.log(clothes)
        }}>yoo</button> */}
        {
          clothes.map((e, index) =>
          <Card name={e.vendorName} date={secondsToDhms(e.createDate.seconds)+' ago'} img={e.picUrl} key = {e.id} id={e.id}/>)
        }
        
      </div>
      <Footer />
    </div>
  )
}

export default Men