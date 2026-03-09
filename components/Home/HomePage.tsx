import React from 'react'
import Hero from "./HeroSection/Hero"
import TechFeatures from './WhyFutureTech/TechFeatures'
import IndepthSection from './FutureTech/IndepthSection'
import ResourcesSection from './ResourceHub/ResourcesSection'
import Testimonials from './TestimonialsSection/Testimonials'

const HomePage = () => {
  return (
    <div className='w-full bg-[#141414] overflow-hidden'>
        <Hero/>
        <TechFeatures/>
        <IndepthSection/>
        <ResourcesSection/>
        <Testimonials/>
      
    </div>
  )
}

export default HomePage
