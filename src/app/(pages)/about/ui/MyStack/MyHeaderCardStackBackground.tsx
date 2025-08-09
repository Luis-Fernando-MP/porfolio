'use client'

import ImageLayer from '@/shared/components/ImageLayer'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import type { FC } from 'react'

const MyHeaderCardStackBackground: FC = () => {
  const { path } = useBackgroundImageStore(s => s.background)

  return (
    <section className='headerCardStack-hero border'>
      <ImageLayer className='headerCardStack-bg' src={path} enableParallax />
    </section>
  )
}

export default MyHeaderCardStackBackground
