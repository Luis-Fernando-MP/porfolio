'use client'

import { motion } from 'framer-motion'
import { FC, useRef } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  children: string
}

const ShadowText: FC<Props> = ({ children }) => {
  const target = useRef<HTMLDivElement>(null)

  return (
    <motion.div className='shadowText' ref={target}>
      <motion.h3 className='shadowText-title'>{children}</motion.h3>
    </motion.div>
  )
}

export default ShadowText
