'use client'

import ImageLayer from '@/shared/components/ImageLayer'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { type FC } from 'react'

import './style.scss'
import './userMobile.scss'

const HomeHero: FC = () => {
  const { path } = useBackgroundImageStore(s => s.background)

  return (
    <section className='homeHero'>
      <ImageLayer className='homeHero-background' src={path} enableParallax />
    </section>
  )
}

export default HomeHero
