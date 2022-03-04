import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import SliderComp from '../components/SliderComp'

const Home = () => {
  return (
    <>
        <SliderComp />
    <Cards />
    <Quote />
    <Footer />
    </>
  )
}

export default Home