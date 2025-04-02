import ShumDev from '@/shared/ui/ShumDev'
import Social from '@/shared/ui/Social'
import { Post, allPosts } from '@contentlayer/generated'
import type { JSX } from 'react'

import './style.scss'

const Home = (): JSX.Element => {
  console.log('--------------------------all', allPosts)
  return (
    <main className='home' aria-label='Página principal de Luis Fernando'>
      <div className='home-wrapper'>
        <ShumDev size='lg' className='home-logo' />
        <section className='paragraph'>
          <h1 className='paragraph-highlight home-title'>Luis Fernando</h1>
          <h2 className='paragraph-normal'> / SHUMI</h2>

          <h5 className='paragraph-break paragraph-normal home-about' aria-label='Descripción de Luis Fernando'>
            Desarrollador y diseñador de aplicaciones web
          </h5>
        </section>

        <section className='home-active border' role='alert'>
          <div />
          <h4>Listo para desarrollar contigo</h4>
        </section>

        <h5 className='paragraph-normal'>Y atento a tus mensajes en:</h5>

        <Social className='home-social' aria-label='Enlaces a redes sociales de Luis Fernando' />
      </div>
    </main>
  )
}

export default Home
