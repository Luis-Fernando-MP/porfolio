'use client'

import Social from '@/shared/ui/Social'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

const HeaderTitle: FC = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 1.5])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.section className='header-main' style={{ scale, opacity }}>
      <h1 className='header-title'>LUIS FERNANDO</h1>
      <h2 className='header-nickname'>#MISHUM</h2>
      <p>Atento a tus menajes en:</p>
      <Social className='home-social' aria-label='Enlaces a redes sociales de Luis Fernando' />
    </motion.section>
  )
}

export default HeaderTitle
