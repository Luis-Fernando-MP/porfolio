'use client'

import { BackImage } from '@/shared/components/BackImage'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { type FC } from 'react'

import './style.scss'

interface Props {
  height?: number
  className?: string
}

export const BackgroundImage: FC<Props> = ({ height = 400, className }) => {
  const background = useBackgroundImageStore(s => s.background)

  const { path, style } = background

  return (
    <BackImage
      className={`backgroundImage ${className}`}
      src={path}
      blur={style}
      style={{
        height: `${height}px`
      }}
    />
  )
}
