import type { JSX } from 'react'

import Footer from '../components/Footer'
import MainBar from '../components/MainBar'
import './style.scss'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      <MainBar className='home-wrapper' />
      {/* <div className='home-wrapper home-sections'></div>
      <Footer /> */}
    </main>
  )
}

export default Home
