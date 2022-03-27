import React from 'react'

import '../styles/slider.css'
import Slider from 'react-slick'

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div>
        <Slider {...settings} className='slider'>

          <div className='slider-item' >
            <div className='barL'></div>
            <div className='desc'>
            <div className='heading'> Good Heading</div>
           
            
            </div>
            <div className='barR'></div>
          </div>
          <div className='slider-item' >
            <div className='barL'></div>
            <div className='desc'>
            <div className='heading'> Good Heading</div>
           
            
            </div>
            <div className='barR'></div>
          </div>
          <div className='slider-item' >
            <div className='barL'></div>
            <div className='desc'>
            <div className='heading'> Good Heading</div>
           
            
            </div>
            <div className='barR'></div>
          </div>
          <div className='slider-item' >
            <div className='barL'></div>
            <div className='desc'>
            <div className='heading'> Good Heading</div>
           
            
            </div>
            <div className='barR'></div>
          </div>

        </Slider>
      </div>
    </>

  )
}

export default SliderComp