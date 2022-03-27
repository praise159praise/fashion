import React from 'react'
import Designer from '../components/Designer'
import { Link } from 'react-router-dom'

import '../styles/designer.css'

const Designers = () => {
  const designers = [
    {
      name:'Sara Dominic',
      desc:'Sara is a 28 year old fashion designer with over 5 years experience in the field. Having worked with companies like MOOD and fashion brands like Alex Spade.',
      img:'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name:'Alexander wang',
      desc:'Wang is a 23 year old fashion designer and stylist with a great eye for colour and designs. Click his profile to see some of his amazing pieces',
      img:'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name:'Hunter Schafer',
      desc:'Hunter is a brilliant designer with a knack for all things fashion and creativity. He has over three years of experience under his belt and has worked with brands like Jacquemus and GAP.',
      img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name:' Carl Eugene',
      desc:'Carl is a fashion brand owner and a fashion designer. He has successfully been able to run her brand for over six months and has also worked with tons of fashion companies prior. At 25, he got to work with the amazing Frank Osodi, a world renowned Nigerian fashion designer as his assistant. ',
      img:'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name:'Malcom kelvin',
      desc:'Malcom graduated from FIT (fashion institute of technology) in 2017 and ever since then, he has worked with Lanre Da-Silva Ajayi and Tiannah\'s empire. He has joined Suave to showcase his beautiful designs and techniques. ',
      img:'https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
    },
    {
      name:'Leon Rodgers',
      desc:'Rodgers is a dutiful and smart fashion designer, stylist and fashion consultant that has been working in this field for over 5 years. He has joined Suave to share and express his undying love for all things fashion ',
      img:'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      name:'Josehpine Vernon',
      desc:'Josephine is a fashion designer from lagos Nigeria who has a passion for fashion. She has worked with over five fashion brands worldwide and has so much talent and creativity to show for it. ',
      img:'https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      
    },
    
  ]
  return (
    <>
      <Link to="/designers"><div className='cat-recent'><span>Designers</span></div></Link>

      <div className='designers'>
        {
          designers.map((e, index) =>
            <Designer name={e.name} desc={e.desc} img={e.img}/>)
        }
      </div>
    </>
  )
}

export default Designers