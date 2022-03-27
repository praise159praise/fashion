import React from 'react'
import { Card } from '../components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Men = () => {
  const displayed = [
    // {
    //   vendorName: 'Alexander Wang',
    //   date: '20 days ago',
    //   img: 'https://lh5.googleusercontent.com/proxy/cuInkH6XRtHZdJpecK0WEHeo8d5umFVZzzpRjhmTsb777BBdGHY8zgeNYxSyAoeDtS8FPcwzj1ero708nRU42jL5nFxCtt4pscivykPkTq0kmngSd8ACQqDswRiM3DoK1WiE2fMVqbghbpoVTxKQybLvP2G6L66G903cdAPe0LC9WUQnQ-I04rc3NA',
    //   liked: true
      
    // },
    // {
    //   vendorName: 'Hunter Schafer',
    //   date: '10 days ago',
    //   img: 'https://lh6.googleusercontent.com/proxy/KZDAghywuNfOri1-idQVL_avJWy1nChJl-Qrysq2SGUXfSc2N2h1a55Mrs1INmtK1Jg0dQEYEsYi-48QU4uERjMvTjVG1zSYs1p-ewXxAsmOSfAz8byI9JsMDKUHizv9fwDus9Nc4xympY2ZeACLztN0Z_8YgoBhgOO6LTGHYhOz52CQEaFCuzJZyy_rX18I-hwl',
    //   liked: true

    // },
    // {
    //   vendorName: 'Malcom Kelvin',
    //   date: '8 mins ago',
    //   img: 'https://lh4.googleusercontent.com/proxy/uq9ta1F6DUstaNAQYi5GQyjW8TZ3GBZx1Nke_HUNnxWQ-EpHfznEKBlYCWxO9AVi4W8xIsZQHjtobRm7N1Jr1J_PlXWmkPaOw4rWEhBOZv5d4THwWk9YTB1f9uw0VAh1gyHW',
    //   liked: true

      

    // },
    // {
    //   vendorName: 'Alexander Wang',
    //   date: '8 mins ago',
    //   img: 'https://asset1.cxnmarksandspencer.com/is/image/mands/20210527_LF_MW_SUITS-FOR-GROOMS-AND-GUESTS-SEO_1?$editorial_780x780$',
    //   liked: false

    // },
    // {
    //   vendorName: 'Malcom Kelvin',
    //   date: '8 mins ago',
    //   img: 'https://cdn-static.farfetch-contents.com/cms-cm/za/media/3423722/data/432753956b6210db8bd2a978c174507d.jpg?ratio=3x4_three-columns&minWidth=409',
    //   liked: false

    // },
    // {
    //   vendorName: 'Leon Rodgers',
    //   date: '45 mins ago',
    //   img: 'https://images.asos-media.com/products/asos-design-wedding-skinny-suit-jacket-in-burgundy-crosshatch/201094352-1-burgundy?$n_480w$&wid=476&fit=constrain',
    //   liked: false

    // },
    

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