import MainBar from '@/app/components/MainBar'
import SplashCursor from '@/shared/components/SplashCursor'
import ShadowText from '@/shared/ui/ShadowText'
import Social from '@/shared/ui/Social'
import type { FC } from 'react'

import DescriptionHeader from '../DescriptionHeader'
import './style.scss'

const Header: FC = () => {
  return (
    <article className='header'>
      {/* <ShadowText */}
      <div className='header-focus' />
      <ShadowText>LUIS FERNANDO DEVELOPER</ShadowText>
      <div className='header-wrapper'>
        <DescriptionHeader />

        <section className='header-main'>
          <h1 className='header-title'>LUIS FERNANDO</h1>
          <h2>#MISHUM</h2>
          <p>Atento a tus menajes en:</p>
          <Social className='home-social' aria-label='Enlaces a redes sociales de Luis Fernando' />
        </section>

        <MainBar />
        {/* <SplashCursor /> */}
      </div>
    </article>
  )
}

export default Header
