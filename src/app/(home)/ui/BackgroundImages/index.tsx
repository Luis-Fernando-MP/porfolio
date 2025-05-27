'use client'

import { backgroundImages } from '@/constants'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { type FC, useLayoutEffect, useState } from 'react'

import './style.scss'

const BackgroundImages: FC = () => {
  const [bgUrl, setBgUrl] = useState<string | null>(null)
  const [placeholder, setPlaceholder] = useState<string | null>(null)

  useLayoutEffect(() => {
    const randIndex = Math.floor(Math.random() * backgroundImages.length)
    const { path, hash } = backgroundImages[randIndex]

    const placeholder = blurhashToCssGradientString(hash)
    setPlaceholder(placeholder)

    const img = new Image()
    img.src = path
    img.onload = () => setBgUrl(path)
  }, [])

  if (!bgUrl) return <section className='BackgroundImages' style={{ backgroundImage: `${placeholder}` }} />

  return <section className='BackgroundImages' style={{ backgroundImage: `url(${bgUrl})` }} />
}

export default BackgroundImages
