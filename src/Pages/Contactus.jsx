import React from 'react'
import Footer from '../components/Footer'
import '../styles/contactus.css'


const Contactus = () => {
  return (
    <div className='contact'>
      <div className="bg">
      <div className="header">
        Contact Us
      </div>
      <form action="">
      <div className="name">
          <span>Name</span>
          <input type="text" name="" id="" required placeholder='Name'/>
        </div>
        <div className="email">
          <span>Email</span>
          <input type="email" name="" id="" required placeholder='Email'/>
        </div>
        <div className="phone">
          <span>Phone</span>
          <input type="tel" name="" id="" placeholder='Phone'/>
        </div>
        <div className="Message">
          <span>Message</span>
          <textarea name="" id="" cols="1" rows="10" placeholder='Message'></textarea>
        </div>
        <button type="submit" className='button'><span>Submit</span></button>
      </form>
      </div>
     
      <Footer/>

    </div>
  )
}

export default Contactus