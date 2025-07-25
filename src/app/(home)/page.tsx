import { INFO } from '@/constants'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import './style.scss'
import DevCardInfo from './ui/DevCardInfo'
import HomeContent from './ui/HomeContent'
import HomeHero from './ui/HomeHero'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label={`Página principal de ${INFO.fullName}`}>
      <HomeHero />
      <MainBar className='home-nav' />

      <div className='home-wrapper'>
        <article className='home-body'>
          <HomeContent />
          <DevCardInfo />
        </article>
      </div>
      <Footer />
    </main>
  )
}

export default Home
