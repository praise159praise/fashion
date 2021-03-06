import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Recents = () => {
  const displayed = [
    
    // {
    //   vendorName: 'Sara Dominic',
    //   date: '20 days ago',
    //   img: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //   liked: true

    // },
    // {
    //   vendorName: 'Josephine Vernon',
    //   date: '10 days ago',
    //   img: 'https://cdn-images.farfetch-contents.com/16/58/63/98/16586398_32607410_1000.jpg',
    //   liked: false

    // },
    // {
    //   vendorName: 'Malcom Kelvin',
    //   date: '8 mins ago',
    //   img: 'https://cdn-static.farfetch-contents.com/cms-cm/za/media/3423722/data/432753956b6210db8bd2a978c174507d.jpg?ratio=3x4_three-columns&minWidth=409',
    //   liked: false

    // },
    // {
    //   vendorName: 'Josephine Vernon',
    //   date: '20 days ago',
    //   img: 'https://cdn-images.farfetch-contents.com/12/53/71/69/12537169_12003145_1000.jpg',
    //   liked: true
    // },
    // {
    //   vendorName: 'Leon Rodgers',
    //   date: '10 days ago',
    //   img: 'https://cdn-images.farfetch-contents.com/18/08/03/48/18080348_38337821_480.jpg',
    //   liked: true

    // },
    // {
    //   vendorName: 'Josephine Vernon',
    //   date: '8 mins ago',
    //   img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1598282112-54524210-061-a-1598282094.jpg?crop=1xw:1xh;center,top&resize=768:*',
    //   liked: true

    // },
    // {
    //   vendorName: 'Sara Dominic',
    //   date: '20 days ago',
    //   img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632338228-76f99424-d550-44cc-9fae-a4b9a8b0a8f6-1632338220.jpg?crop=1xw:0.9782608695652174xh;center,top&resize=768:*',
    //   liked: true

    // },
    // {
    //   vendorName: 'Hunter Schafer',
    //   date: '10 days ago',
    //   img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632340756-screen-shot-2021-09-22-at-3-58-07-pm-1632340742.png?crop=0.9909015715467328xw:1xh;center,top&resize=768:*',
    //   liked: false

    // },
    // {
    //   vendorName: 'Alexander Wang',
    //   date: '8 mins ago',
    //   img: 'https://asset1.cxnmarksandspencer.com/is/image/mands/20210527_LF_MW_SUITS-FOR-GROOMS-AND-GUESTS-SEO_1?$editorial_780x780$',
    //   liked: false

    // },
  ]
  return (
    <div className='main-container'>
      <Link to="/wishlist"><div className='cat-recent'><span>WishList</span></div></Link>
      <div className='card-container'>
        {
          displayed.map((e, index) =>
            e.liked && <Card name={e.vendorName} date={e.date} liked={e.liked} img={e.img}/>)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Recents