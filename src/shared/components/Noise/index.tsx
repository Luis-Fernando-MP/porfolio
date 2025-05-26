'use client'

import useAppStore, { NOISE_OPTIONS } from '@/shared/store/app.store'
import { FC } from 'react'

import './style.scss'

const Noise: FC = () => {
  const noiseStyle = useAppStore(s => s.noiseStyle)

  const noise = NOISE_OPTIONS[noiseStyle]

  if (noise === 0) return null
  return <div className='noise' style={{ opacity: noise / 10 }} />
}

export default Noise
