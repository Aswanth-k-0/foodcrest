import React from 'react'
import Header from '../../components/Header'
import HeroSection from './components/HeroSection'
import OurDishes from './components/OurDishs'
import WhyChooseUs from './components/WhyChooseUs'
import CustomerReviews from './components/CustomerReviews'

function HomeScreen() {
  return (
    <div className='space-x-3 '>
      <Header />
      <HeroSection />
      <OurDishes />
      <WhyChooseUs />
      <CustomerReviews />
    </div>
  )
}

export default HomeScreen