'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

const FocusGradient: FC = () => {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 400], [1, 2])
  const opacity = useTransform(scrollY, [0, 400], [0.5, 0.1])

  return <motion.div className='header-focus' animate={{ rotateZ: [0, 120, 0] }} style={{ x: '-50%', scale, opacity }} />
}

export default FocusGradient
