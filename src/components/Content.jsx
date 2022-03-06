import React from 'react'
import vidbg from '../assets/video/bg2.mp4'
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

                <div className="secdesc"><span>Heading</span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptates eos earum quaerat laudantium dolores quod, error atque aut libero iste dolor labore autem et nesciunt corrupti iusto nam voluptate
                        .</span>
                </div>
            </div>
        </div>
    )
}

export default Content