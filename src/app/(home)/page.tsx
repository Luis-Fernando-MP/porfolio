import SplashCursor from '@/shared/components/SplashCursor'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import LatestPosts from './components/LatestPosts'
import PreviewProjects from './components/PreviewProjects'
import Testimonies from './components/Testimonies'
import './style.scss'
import Header from './ui/Header'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      {/* <SplashCursor /> */}
      <Header />
      <div className='home-wrapper home-sections'>
        <MainBar className='home-wrapper' />
        <PreviewProjects />
        <LatestPosts />
        <Testimonies />
      </div>
      <Footer />
    </main>
  )
}

export default Home
