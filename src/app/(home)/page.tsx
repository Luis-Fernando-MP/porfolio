import SplashCursor from '@/shared/components/SplashCursor'
import type { JSX } from 'react'

import MainBar from '../components/MainBar'
import PreviewProjects from './components/PreviewProjects'
import './style.scss'
import Header from './ui/Header'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      {/* <SplashCursor /> */}
      <Header />
      <MainBar className='home-wrapper' />
      <div className='home-wrapper home-sections'>
        <PreviewProjects />
      </div>
    </main>
  )
}

export default Home
