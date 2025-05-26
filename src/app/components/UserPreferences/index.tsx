import { APP } from '@/constants'
import Social from '@/shared/ui/Social'
import Link from 'next/link'
import type { FC } from 'react'

import ThemesSelector from '../ThemesSelector'
import FontSizeComponent from './FontSizeComponent'
import NoiseOptionsComponent from './NoiseOptionsComponent'
import './style.scss'
import './userMobile.scss'

const UserPreferences: FC = () => {
  return (
    <section className='UPreferences border'>
      <nav className='UPreferences-pages'>
        {APP.pages.map(page => {
          const { Icon, image, label, path } = page
          return (
            <Link key={path} href={path} className='UPreferences-page border' style={{ backgroundImage: `url(${image})` }}>
              <div className='UPreferences-page__content'>
                <Icon />
                <h4>{label}</h4>
              </div>
            </Link>
          )
        })}
      </nav>

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
      </section>
    </section>
  )
}

export default UserPreferences
