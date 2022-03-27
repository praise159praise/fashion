import React from 'react'
import vidbg from '../assets/video/bg2.mp4'
import vidbg2 from '../assets/video/bg3.mp4'
import vidbg3 from '../assets/video/bg4.mp4'
import '../styles/content.css'
const Content = () => {
    return (
        <div className='content'>
            <div className="section1">
                <div className="img">
                    <video autoPlay loop>
                        <source src={vidbg} type="video/mp4" />
                    </video>
                </div>

                <div className="secdesc"><span>Dress your best </span>
                    <span>
                    Add a touch of sunshine to your style with the hottest minis, maxis and more. Few items to energize your outfit, quite like a beautiful new shirt.</span>
                </div>
            </div>
            <div className="section1">
                <div className="img">
                    <video autoPlay loop>
                        <source src={vidbg2} type="video/mp4" />
                    </video>
                </div>

                <div className="secdesc"><span>Go for bold</span>
                    <span>
                        Our designers are certainly not afraid to play with colors, and invent brand new ways of wearing, styling and piecing together new looks to spice up your wardrobe. Take a look at our recent collections in the recent tab and see what you find. 
                        .</span>
                </div>
            </div>
            <div className="section1">
                <div className="img">
                    <video autoPlay loop>
                        <source src={vidbg3} type="video/mp4" />
                    </video>
                </div>

                <div className="secdesc"><span>New In</span>
                    <span>
                      New collections will be available every week. Check in regularly so you do not miss out on a SALE!
                        .</span>
                </div>
            </div>
        </div>
    )
}

export default Content