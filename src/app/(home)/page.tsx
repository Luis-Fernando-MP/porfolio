import { INFO } from '@/constants'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import './style.scss'
import DevCardInfo from './ui/DevCardInfo'
import HomeBackground from './ui/HomeBackground'
import QuickAccess from './ui/QuickAccess'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label={`Página principal de ${INFO.fullName}`}>
      <QuickAccess />
      <MainBar />
      <div className='home-wrapper'>
        <HomeBackground />
        <article className='home-body'>
          <div className='home-content'>content</div>
          <DevCardInfo />
        </article>
      </div>
      <Footer />
    </main>
  )
}

export default Home
