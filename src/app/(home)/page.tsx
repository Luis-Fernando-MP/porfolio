import { INFO } from '@/constants'
import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import Comments from './components/Comments'
import LatestPosts from './components/LatestPosts'
import './style.scss'
import DevCardInfo from './ui/DevCardInfo'
import HomeHero from './ui/HomeHero'
import ProjectsContent from './ui/ProjectsContent'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label={`Página principal de ${INFO.fullName}`}>
      <HomeHero />
      <MainBar className='home-nav' includeDevCard={true} />

      <div className='home-wrapper'>
        <article className='home-presentation'>
          <ProjectsContent />
          <DevCardInfo />
        </article>
        <LatestPosts className='home-section' />
        <Comments className='home-section' />
      </div>
      <Footer />
    </main>
  )
}

export default Home
