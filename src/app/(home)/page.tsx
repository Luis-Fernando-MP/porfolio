import type { JSX } from 'react'

import './style.scss'
import Header from './ui/Header'

const Home = (): JSX.Element => {
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      <Header />
    </main>
  )
}

export default Home
