import React, { useEffect, useState } from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import { db } from '../fireConfig'
import Footer from '../components/Footer'

import { collection, getDocs } from 'firebase/firestore'


const Recents = () => {
  const [recents, setRecents] = useState([])
  const referenceCollection = collection(db, 'items')

  const displayed = [
    {
      vendorName: 'Alexander Wang',
      date: '20 days ago',
      img: 'https://lh5.googleusercontent.com/proxy/cuInkH6XRtHZdJpecK0WEHeo8d5umFVZzzpRjhmTsb777BBdGHY8zgeNYxSyAoeDtS8FPcwzj1ero708nRU42jL5nFxCtt4pscivykPkTq0kmngSd8ACQqDswRiM3DoK1WiE2fMVqbghbpoVTxKQybLvP2G6L66G903cdAPe0LC9WUQnQ-I04rc3NA',
      liked: true
    },
    {
      vendorName: 'Hunter Schafer',
      date: '10 days ago',
      img: 'https://lh6.googleusercontent.com/proxy/KZDAghywuNfOri1-idQVL_avJWy1nChJl-Qrysq2SGUXfSc2N2h1a55Mrs1INmtK1Jg0dQEYEsYi-48QU4uERjMvTjVG1zSYs1p-ewXxAsmOSfAz8byI9JsMDKUHizv9fwDus9Nc4xympY2ZeACLztN0Z_8YgoBhgOO6LTGHYhOz52CQEaFCuzJZyy_rX18I-hwl',
      liked: true

    },
    {
      vendorName: 'Malcom Kelvin',
      date: '8 mins ago',
      img: 'https://lh4.googleusercontent.com/proxy/uq9ta1F6DUstaNAQYi5GQyjW8TZ3GBZx1Nke_HUNnxWQ-EpHfznEKBlYCWxO9AVi4W8xIsZQHjtobRm7N1Jr1J_PlXWmkPaOw4rWEhBOZv5d4THwWk9YTB1f9uw0VAh1gyHW',
      liked: true

    },
    {
      vendorName: 'Sara Dominic',
      date: '20 days ago',
      img: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      liked: true

    },
    {
      vendorName: 'Josephine Vernon',
      date: '10 days ago',
      img: 'https://cdn-images.farfetch-contents.com/16/58/63/98/16586398_32607410_1000.jpg',
      liked: false

    },
    {
      vendorName: 'Malcom Kelvin',
      date: '8 mins ago',
      img: 'https://cdn-static.farfetch-contents.com/cms-cm/za/media/3423722/data/432753956b6210db8bd2a978c174507d.jpg?ratio=3x4_three-columns&minWidth=409',
      liked: false

    },
    {
      vendorName: 'Josephine Vernon',
      date: '20 days ago',
      img: 'https://cdn-images.farfetch-contents.com/12/53/71/69/12537169_12003145_1000.jpg',
      liked: true
    },
    {
      vendorName: 'Leon Rodgers',
      date: '10 days ago',
      img: 'https://cdn-images.farfetch-contents.com/18/08/03/48/18080348_38337821_480.jpg',
      liked: true

    },
    {
      vendorName: 'Josephine Vernon',
      date: '8 mins ago',
      img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1598282112-54524210-061-a-1598282094.jpg?crop=1xw:1xh;center,top&resize=768:*',
      liked: true

    },
    {
      vendorName: 'Sara Dominic',
      date: '20 days ago',
      img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632338228-76f99424-d550-44cc-9fae-a4b9a8b0a8f6-1632338220.jpg?crop=1xw:0.9782608695652174xh;center,top&resize=768:*',
      liked: true

    },
    {
      vendorName: 'Hunter Schafer',
      date: '10 days ago',
      img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632340756-screen-shot-2021-09-22-at-3-58-07-pm-1632340742.png?crop=0.9909015715467328xw:1xh;center,top&resize=768:*',
      liked: false

    },
    {
      vendorName: 'Alexander Wang',
      date: '8 mins ago',
      img: 'https://asset1.cxnmarksandspencer.com/is/image/mands/20210527_LF_MW_SUITS-FOR-GROOMS-AND-GUESTS-SEO_1?$editorial_780x780$',
      liked: false

    },
  ]
  useEffect(() => {
    const getRecents = async () => {
      const data = await getDocs(referenceCollection)
      setRecents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getRecents()
  })


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