import Footer from '@/app/components/Footer'
import MainBar from '@/app/components/MainBar'
import { Metadata } from 'next'
import type { JSX } from 'react'

import './style.scss'
import Details from './ui/Details'

export const metadata: Metadata = {
  title: 'Acerca de mi'
}

const About = (): JSX.Element => {
  return (
    <>
      <Details className='about-details' />
    </>
  )
}

export default About
