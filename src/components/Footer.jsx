import React from 'react'
import { FaDotCircle, FaFacebookF, FaInstagram, FaLinkedin, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa'
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>
                 SUAVE
            </div>
            <div className='category customers'>
                <div className='header'>Customers</div>
                <div>Designers</div>
            </div>
            <div className='category company'>
                <div className='header'>Company</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
            <div className='category further-info'>
                <div className='header'>Further Information</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </div>
            <div className='category  follow-us'>
                <div className='header'>Follow Us</div>
                <div className='icons'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaMedium />
                    <FaTelegram />
                </div>
            </div>
        </div>
    )
}

export default Footer