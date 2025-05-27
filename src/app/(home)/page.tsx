import { INFO } from '@/constants'
import Link from 'next/link'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import './style.scss'
import BackgroundImages from './ui/BackgroundImages'
import DevCardInfo from './ui/DevCardInfo'
import QuickAccess from './ui/QuickAccess'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label={`Página principal de ${INFO.name}`}>
      <QuickAccess />
      <MainBar />
      <div className='home-wrapper'>
        <BackgroundImages />
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
