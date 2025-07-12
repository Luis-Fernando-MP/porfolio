'use client'

import { BackImage } from '@/shared/components/BackImage'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { CSSProperties, type FC } from 'react'

import './style.scss'

interface Props {
  height?: number
  className?: string
  style?: CSSProperties
}

export const BackgroundImage: FC<Props> = ({ height = 400, className, style }) => {
  const background = useBackgroundImageStore(s => s.background)

  const { path, hash } = background

  return (
    <BackImage
      className={`backgroundImage ${className}`}
      src={path}
      blur={hash}
      style={{
        height: `${height}px`,
        ...style
      }}
    />
  )
}
