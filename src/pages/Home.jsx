import React from 'react'
import { Hero } from '../components/Hero'
import { FeaturedCars } from '../components/FeaturedCars'
import { Blog } from '../components/Blog'
import { GetStarted } from '../components/GetStarted'

export const Home = () => {
  return (
    <div>
        <Hero />
        <FeaturedCars />
        <GetStarted />
        <Blog />
    </div>
  )
}
