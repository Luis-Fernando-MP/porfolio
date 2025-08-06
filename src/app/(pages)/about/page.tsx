import { metadataByPage } from '@/constants/metadata'
import { Metadata } from 'next'
import type { JSX } from 'react'

import Certificates from './ui/Certificates'
import Details from './ui/Details'
import DevExperiences from './ui/DevExperiences'
import DevStack from './ui/DevStack'

export const metadata: Metadata = metadataByPage.about

const About = (): JSX.Element => {
  return (
    <div className='page-content'>
      <Details />
      <Certificates />
      <DevExperiences />
      <DevStack />
    </div>
  )
}

export default About
