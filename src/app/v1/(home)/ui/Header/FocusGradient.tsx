'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

const FocusGradient: FC = () => {
  const { scrollY } = useScroll()
  const top = useTransform(scrollY, [0, 300], [-100, 500])
  const blur = useTransform(scrollY, [0, 300], ['blur(250px)', 'blur(100px)'])

  return <motion.div className='header-focus' style={{ y: top, x: '-50%', filter: blur }} />
}

export default FocusGradient
