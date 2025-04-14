import { Metadata } from 'next'
import type { JSX } from 'react'

import Certificates from './ui/Certificates'
import Details from './ui/Details'
import DevExperiences from './ui/DevExperiences'
import DevStack from './ui/DevStack'

export const metadata: Metadata = {
  title: 'Acerca de mi - Luis Fernando',
  description:
    'Portafolio de Luis Fernando (Mishum) - Desarrollador Full Stack y Diseñador UI. Especialista en crear interfaces intuitivas y sistemas útiles para la comunidad de desarrolladores.',
  keywords: 'desarrollador full stack, diseñador UI, programación web, desarrollo web, Luis Fernando, Mishum'
}

const About = (): JSX.Element => {
  return (
    <>
      <Details />
      <Certificates />
      <DevExperiences />
      <DevStack />
    </>
  )
}

export default About
