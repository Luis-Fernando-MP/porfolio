'use client'

import { backgroundImages } from '@/constants'
import { BackImage } from '@/shared/components/BackImage'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { type FC, useLayoutEffect, useState } from 'react'

import './style.scss'

interface Props {
  height?: number
  className?: string
}

export const BackgroundImage: FC<Props> = ({ height = 400, className }) => {
  const [img, setImg] = useState<{ path: string; style: string } | null>(null)

  useLayoutEffect(() => {
    const randIndex = Math.floor(Math.random() * backgroundImages.length)
    const selected = backgroundImages[randIndex]
    const placeholder = blurhashToCssGradientString(selected.hash)
    setImg({ path: selected.path, style: placeholder })
  }, [])

  return (
    <BackImage
      className={`backgroundImage ${className}`}
      src={img?.path ?? ''}
      blur={img?.style}
      style={{
        height: `${height}px`
      }}
    />
  )
}
