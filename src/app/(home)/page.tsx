import SplashCursor from '@/shared/components/SplashCursor'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import LatestPosts from './components/LatestPosts'
import PreviewProjects from './components/PreviewProjects'
import Testimonies from './components/Testimonies'
import './style.scss'
import Header from './ui/Header'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      {/* <SplashCursor /> */}
      <Header />
      <MainBar className='home-wrapper' />

      <div className='home-wrapper home-sections'>
        <PreviewProjects />
        <LatestPosts />
        <Testimonies />
      </div>
      <Footer />
    </main>
  )
}

export default Home
