'use client'

import { backgroundImages } from '@/constants'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { type FC, useLayoutEffect, useState } from 'react'

import './style.scss'

interface Props {
  height?: number
  className?: string
}

export const BackgroundImagesWrapper: FC<Props> = ({ height = 400, className }) => {
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

  const backgroundImage = bgUrl ? `url(${bgUrl})` : placeholder
  return (
    <section
      className={`backgroundImage-wrapper fade ${className}`}
      style={{ backgroundImage: `${backgroundImage}`, height: `${height}px` }}
    />
  )
}
