/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Hero,HeroTitle } from './ui/hero'
import { Button } from './ui/button'

export default function YouBelong() {
  return (
    <Hero>
    <HeroTitle className="">
    You belong
    <br/>
    among the stars
    </HeroTitle>
    <Button size="large" className='mt-[24px]'>
        Sign up for free
    </Button>
  </Hero>
  )
}
