import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react/cjs/react.development'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { auth, db, storage } from '../fireConfig'
import secondsToDhms from '../timeformatter'
import { async } from '@firebase/util'

const Women = () => {

  const [clothes, setClothes] = useState()
  const [name, setName] = useState('')

  useEffect(() => {
    getClothes()
    setClothes(clothes)

  })
  const getClothes = async () => {
    const q = query(collection(db, 'clothes'), where("category", "==", 'women'))
    const querySnapshot = await getDocs(q);
    let temp = []

    temp = querySnapshot.docs.map((doc) => ({
      ...doc.data(), id: doc.id,
    }))

    temp.forEach(async (tempitem) => {
      const userRef = await doc(db, 'userdata', tempitem.vendorId)
      const data = await getDoc(userRef)
      const username = await data.data().username
      tempitem.vendorName = await  username

    })

    setClothes(await temp)
    // console.log(clothes)


  }
  

  return (
    <div className='main-container'>
      <Link to="/women"><div className='cat-recent'><span>Women</span></div></Link>
      <div className='card-container'>
        {clothes &&
          clothes.map((cloth, index) =>
            <Card name={cloth.vendorName} date={secondsToDhms(cloth.createDate.seconds) + ' ago'} img={cloth.picUrl} key={cloth.id} id={cloth.id} />)
            
        }
        {/* <button onClick={()=>{
          getClothes()
          console.log(clothes)
        }}>clothes</button> */}
      </div>
      <Footer />
    </div>
  )
}

export default Women