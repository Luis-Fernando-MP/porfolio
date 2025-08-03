'use client'

import ImageLayer from '@/shared/components/ImageLayer'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import type { FC } from 'react'

import './style.scss'

// import './userMobile.scss'

const BackgroundHero: FC = () => {
  const { path } = useBackgroundImageStore(s => s.background)

  return (
    <section className='bgHero border'>
      <ImageLayer className='bgHero-bg' src={path} />
    </section>
  )
}

export default BackgroundHero
