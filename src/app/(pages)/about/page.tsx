import { metadataByPage } from '@/constants/metadata'
import { Metadata } from 'next'
import type { JSX } from 'react'

import Certificates from './ui/Certificates'
import Details from './ui/Details'
import DevExperiences from './ui/DevExperiences'
import MyStack from './ui/MyStack'

export const metadata: Metadata = metadataByPage.about

const About = (): JSX.Element => {
  return (
    <div className='page-content'>
      <Details />
      <MyStack />
      <Certificates />
      <DevExperiences />
    </div>
  )
}

export default About
