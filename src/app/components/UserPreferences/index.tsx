import NavLinks from '@/app/ui/NavLinks'
import { APP } from '@/constants'
import Social from '@/shared/ui/Social'
import Link from 'next/link'
import type { FC } from 'react'

import ThemesSelector from '../ThemesSelector'
import FontSizeComponent from './FontSizeComponent'
import NoiseOptionsComponent from './NoiseOptionsComponent'
import SoundOptionsComponent from './SoundOptionsComponent'
import './style.scss'
import './userMobile.scss'

const UserPreferences: FC = () => {
  return (
    <section className='UPreferences border'>
      <NavLinks />

      <section className='UPreferences-section'>
        <h3># Temas</h3>
        <ThemesSelector />
      </section>

      <section className='UPreferences-section'>
        <div className='UPreferences-group'>
          <h3># Redes</h3>
          <Social />
        </div>
        <div className='UPreferences-group'>
          <h3># Fuente</h3>
          <FontSizeComponent />
        </div>
        <div className='UPreferences-group'>
          <h3># Fondo ruidoso</h3>
          <NoiseOptionsComponent />
        </div>
        <div className='UPreferences-group'>
          <h3># Sonidos</h3>
          <SoundOptionsComponent />
        </div>
      </section>
    </section>
  )
}

export default UserPreferences
