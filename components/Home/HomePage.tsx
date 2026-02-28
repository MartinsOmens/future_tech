import React from 'react'
import Hero from "./HeroSection/Hero"
import TechFeatures from './WhyFutureTech/TechFeatures'
import IndepthSection from './FutureTech/IndepthSection'

const HomePage = () => {
  return (
    <div className='w-full bg-[#141414] overflow-hidden'>
        <Hero/>
        <TechFeatures/>
        <IndepthSection/>
      
    </div>
  )
}

export default HomePage
