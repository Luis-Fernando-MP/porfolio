import { metadataByPage } from '@/constants/metadata'
import { Metadata } from 'next'
import type { JSX } from 'react'

import Details from './ui/Details'
import MyStack from './ui/MyStack'
import WorkExperience from './ui/WorkExperience'

export const metadata: Metadata = metadataByPage.about

const About = (): JSX.Element => {
  return (
    <div className='page-content'>
      <Details />
      <MyStack />
      <WorkExperience />
    </div>
  )
}

export default About
