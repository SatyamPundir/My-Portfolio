import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'
import SlidingTimeline from './sliding_timeline'
import 'swiper/css'


const Services = () => {
  return (
    <section id='services'>
      <h5>Qualifications</h5>
      <h2>Education</h2>
      <SlidingTimeline />
    </section>
  )
}

export default Services