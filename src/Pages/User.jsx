import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db, storage } from '../fireConfig'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/user.css'
import { async } from '@firebase/util'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, addDoc, query, where, getDocs, onSnapshot } from 'firebase/firestore'
import { FaCross, FaFacebookF, FaInstagram, FaSadCry, FaTwitter } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'

const NewCloth = (props) => {


  return (

    <img src={props.img} alt="" className='cloth' />
  )
}

const User = () => {
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [first, setFirst] = useState('')
  const [userdata, setUserData] = useState('')
  const [clothes, setClothes] = useState([])
  const [adding, setAdding] = useState(false)
  const [image, setImage] = useState()
  const [price, setPrice] = useState()
  const [cat, setCat] = useState('men')
  const [picUrl, setPicUrl] = useState()
  const [progress, setProgress] = useState()
  const [file, setFile] = useState()


  useEffect(() => {
    getUserData()
    waitForEmail()
  })
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  useEffect(()=>{
    getClothes()
    console.log('once')
  },[user])

  
//this function gets userdata from the currently logged in user...the currently logged in user is stored in auth.currentUser
  const getUserData = async () => {
    //we get the user's reference
    const userRef = await doc(db, 'userdata', await auth.currentUser.uid)

    //we get the actual data from teh reference stored in userref 
    const data = await getDoc(userRef)
    setUserData(data.data())
  }
  const getClothes = async () => {

    //we show the use of the 'where' clause in filtering data in teh firestore database 
    const q = query(collection(db, 'clothes'), where("vendorId", "==", user.uid))
    const querySnapshot = await getDocs(q);
    const temp = []
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    })
    setClothes(temp)

  }

  const waitForEmail = async () => {
    var email = await user.email[0]

    setEmail(email)

  }

  const uploadfiles = (file) => {
    console.log('started')

    if (!file) return
    const storageRef = ref(storage, `/clothes/${file.name}${serverTimestamp().seconds}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    console.log(storageRef)
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

      setProgress(prog)
      console.log(`uploading ${prog}%`)

    }, (err) => {
      console.log(err)
      getClothes()
    },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(async url => {
            console.log(url)

            const clothRef = await addDoc(collection(db, 'clothes'), { vendorId: user.uid, picUrl: url, createDate: serverTimestamp(), price: price, category: cat, vendorName: userdata.username })
            console.log('clothe at ', clothRef.id)
            getClothes()

          })
          .then(() => {
            console.log('done')
          })
      })
  }


  return (
    <div className='main-container'>
      <Link to="/recents"><div className='cat-recent'><span>User</span></div></Link>
      <div className="user-area">
        <div className="userpic">
          {email}
        </div>
        {
          (userdata && 
            <div className="user-details" onLoad={()=>{
              console.log('hello')
            }}>
              <div className="user-email">
                Welcome {user.email}
              </div>
              <div className="name">
                <p>update username</p>
                <input type="text" name="" id="" onChange={async (event) => {
                  await updateDoc(doc(db, 'userdata', await user.uid), { username: event.target.value })
                  console.log('done')
                }}
                />
              </div>
              <div className="icons">
                <div> <FaFacebookF /> </div>
                <div> <FaTwitter /> </div>
                <div> <FaInstagram /> </div>
                <a href={`mailto:${user.email}`}> <SiGmail /> </a>
              </div>
              <div className="vendor">
                <p>{userdata.isVendor ? "Become Regular Customer" : "Become Vendor"}</p>
                <div className={userdata.isVendor ? "switch isVendor" : 'switch'} onClick={async () => {

                  await updateDoc(doc(db, 'userdata', await user.uid), { isVendor: !(userdata.isVendor) })

                }}></div>
              </div>

            </div>)

        }

      </div>
      {userdata.isVendor &&
        <>
        <div className="add-header">
              Work On display
            </div>
          <div className='add'>
            
            {
              clothes.map((clothe) => <NewCloth img={clothe.picUrl} />)
            }

            <label className='new' onClick={() => {
              setAdding(true)
            }} ><IoMdAdd /></label> </div>
        </>
      }
      <button onClick={() => {
        console.log(clothes)
      }}>yoooo</button>
      <Footer />
      {adding &&
        <div className="adding-modal" >
          <FaCross onClick={() => {
            setAdding(false)
          }} />
          <div className="adding-container">
            <form action="" >
              <label htmlFor="pic" style={{ background: image }}>
                <img src={image} alt="" className='img-preview' />
              </label>

              <input accept='image/*' type="file" name="pic" id="pic" hidden onClickCapture={(event) => {
                console.log('lol')

              }} onInput={(event) => {
                console.log('works?')
                const file = event.target.files[0]
                setFile(file)
                console.log(file)
                if (file) {
                  setImage(URL.createObjectURL(file))
                }
              }} />
              <div className="info">
                <div className="price">
                  <p>Price</p>
                  <input type="number" name="" id="" onChange={(event) => {
                    setPrice(event.target.value)
                  }} />
                </div>
                <div className="category">
                  <p>Category</p>
                  <select name="" id="" onChange={(event) => {
                    setCat(event.target.value)
                  }}>
                    <optgroup>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="children">Children</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <button type="submit" onClick={(event) => {
                setAdding(false)
                console.log('lol')

                event.preventDefault()
                uploadfiles(file)
              }}>
                <IoMdAdd />
              </button>
            </form>

          </div>
        </div>

      }
    </div>
  )
}

export default User