'use client'

import ImageLayer from '@/shared/components/ImageLayer'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { type FC } from 'react'

interface Props {
  className?: string
}

export const BackgroundImage: FC<Props> = ({ className }) => {
  const { path, isLottie } = useBackgroundImageStore(s => s.background)
  return <ImageLayer className={className} src={path} isLottie={isLottie} />
}
