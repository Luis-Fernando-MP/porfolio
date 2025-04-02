'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

const FocusGradient: FC = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 2])
  const opacity = useTransform(scrollY, [0, 400], [1, 2])

  return <motion.div className='header-focus' style={{ scale, opacity, x: '-50%' }} />
}

export default FocusGradient
