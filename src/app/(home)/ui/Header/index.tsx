'use client'

import IconButton from '@/shared/ui/IconButton'
import MiShumDev from '@/shared/ui/MiShumDev'
import ShadowText from '@/shared/ui/ShadowText'
import Social from '@/shared/ui/Social'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

import FocusGradient from './FocusGradient'
import './style.scss'
import './userMobile.scss'

const Header: FC = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 300], [1, 1.2])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.article className='header' style={{ scale, opacity }}>
      <ShadowText>LUIS FERNANDO DEVELOPER</ShadowText>
      <FocusGradient />

      <div className='header-wrapper'>
        <header className='header-top'>
          <MiShumDev radius='rounded' />
          <IconButton className='border'>
            <div className='header-point' />
            <h4>Listo para desarrollar contigo</h4>
          </IconButton>
        </header>

        <section className='header-main'>
          <h5 className='header-description'>
            Desarrollador y diseñador de aplicaciones web <u>Full Stack</u>
          </h5>
          <h1 className='header-title'>LUIS FERNANDO</h1>
          <h2 className='header-nickname'>#MISHUM</h2>
          <p>Atento a tus menajes en:</p>
          <Social className='home-social' aria-label='Enlaces a redes sociales de Luis Fernando' />
        </section>
      </div>
    </motion.article>
  )
}

export default Header
