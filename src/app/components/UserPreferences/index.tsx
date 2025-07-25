import NavLinks from '@/app/ui/NavLinks'
import { INFO } from '@/constants'
import IconButton from '@/shared/ui/IconButton'
import Social from '@/shared/ui/Social'
import type { FC } from 'react'

import BackgroundSelector from '../BackgroundSelector'
import MusicButton from '../MusicButton'
import ThemesSelector from '../ThemesSelector'
import FontSizeComponent from './FontSizeComponent'
import NoiseOptionsComponent from './NoiseOptionsComponent'
import SoundOptionsComponent from './SoundOptionsComponent'
import './style.scss'
import './userMobile.scss'

const UserPreferences: FC = () => {
  return (
    <section className='UPreferences border'>
      {/* <MusicButton />
      <IconButton className='events-none' active>
        <div className='mainBar-point' />
        {INFO.working.state && <h4>Creando ideas con {INFO.working.enterprise}</h4>}
        {!INFO.working.state && <h4>Trabajemos juntos</h4>}
      </IconButton> */}

      <section className='UPreferences-section'>
        <h5># Páginas</h5>
        <NavLinks />
      </section>

      <section className='UPreferences-section'>
        <h5># Temas</h5>
        <ThemesSelector />
      </section>

      <section className='UPreferences-section'>
        <h5># Background</h5>
        <BackgroundSelector />
      </section>

      <section className='UPreferences-section'>
        <div className='UPreferences-group'>
          <h5># Redes</h5>
          <Social />
        </div>
        <div className='UPreferences-group'>
          <h5># Fuente</h5>
          <FontSizeComponent />
        </div>
        <div className='UPreferences-group'>
          <h5># Fondo ruidoso</h5>
          <NoiseOptionsComponent />
        </div>
        <div className='UPreferences-group'>
          <h5># Sonidos</h5>
          <SoundOptionsComponent />
        </div>
      </section>
    </section>
  )
}

export default UserPreferences
