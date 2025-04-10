'use client'

import FallingText from '@/shared/components/FallingText'
import IconButton from '@/shared/ui/IconButton'
import ShadowText from '@/shared/ui/ShadowText'
import Social from '@/shared/ui/Social'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const Header: FC = () => {
  const { scrollY } = useScroll()

  const top = useTransform(scrollY, [0, 600], [0, 300])
  const scale = useTransform(scrollY, [0, 600], [1, 1.2])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <motion.article className='header' style={{ scale, opacity, top }}>
      <ShadowText>LUIS FERNANDO DEVELOPER</ShadowText>

      <div className='header-wrapper'>
        <header className='header-top'>
          <IconButton className='border'>
            <div className='header-point' />
            <h3>Listo para desarrollar contigo</h3>
          </IconButton>
        </header>

        <section className='header-main'>
          <h1 className='header-title'>LUIS FERNANDO</h1>
          <FallingText
            text={`Desarrollador y diseñador de aplicaciones web Full Stack`}
            highlightWords={['Full', 'Stack']}
            highlightClass='highlighted'
            trigger='hover'
            backgroundColor='transparent'
            wireframes={false}
            gravity={0.56}
            fontSize='2rem'
            mouseConstraintStiffness={0.9}
          />
          {/* <h5 className='header-description'>
            Desarrollador y diseñador de aplicaciones web <u>Full Stack</u>
          </h5> */}
          <h2 className='header-nickname'>#MISHUM</h2>
          <p>Atento a tus menajes en:</p>
          <Social className='home-social' aria-label='Enlaces a redes sociales de Luis Fernando' />
        </section>
      </div>
    </motion.article>
  )
}

export default Header
