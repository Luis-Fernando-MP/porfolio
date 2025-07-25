import NavLinks from '@/app/ui/NavLinks'
import { INFO } from '@/constants'
import IconButton from '@/shared/ui/IconButton'
import Social from '@/shared/ui/Social'
import type { FC } from 'react'

import BackgroundSelector from '../BackgroundSelector'
import MusicButton from '../MusicButton'
import ThemesSelector from '../ThemesSelector'
import CurrentThemeName from '../ThemesSelector/CurrentThemeName'
import FontSizeComponent from './FontSizeComponent'
import NoiseOptionsComponent from './NoiseOptionsComponent'
import SoundOptionsComponent from './SoundOptionsComponent'
import './style.scss'
import './userMobile.scss'

const UserPreferences: FC = () => {
  return (
    <section className='UPreferences border'>
      <section className='UPreferences-section'>
        <h5># Páginas</h5>
        <NavLinks />
      </section>

      <section className='UPreferences-section'>
        <h5># Temas</h5>
        <ThemesSelector />
        <CurrentThemeName />
      </section>

      <section className='UPreferences-section'>
        <h5># Background</h5>
        <BackgroundSelector />
      </section>

      <div className='UPreferences-section'>
        <h5># Redes</h5>
        <Social />
      </div>

      <div className='UPreferences-section'>
        <h5># Otros</h5>
        <MusicButton />
        <IconButton className='events-none' active>
          <div className='mainBar-point' />
          {INFO.working.state && <h4>Creando ideas con {INFO.working.enterprise}</h4>}
          {!INFO.working.state && <h4>Trabajemos juntos</h4>}
        </IconButton>
      </div>

      <section className='UPreferences-section'>
        <div className='UPreferences-group'>
          <h5># Sonidos</h5>
          <SoundOptionsComponent />
        </div>
        <div className='UPreferences-group'>
          <h5># Fuente</h5>
          <FontSizeComponent />
        </div>
        <div className='UPreferences-group'>
          <h5># Fondo ruidoso</h5>
          <NoiseOptionsComponent />
        </div>
      </section>
    </section>
  )
}

export default UserPreferences
