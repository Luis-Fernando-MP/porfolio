import ShinyText from '@/shared/ui/ShinyText'
import Social from '@/shared/ui/Social'
import { CuboidIcon, LayoutIcon, VenetianMaskIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

const GENERAL_LINKS = {
  home: 'Inicio',
  blog: 'Blog',
  projects: 'Proyectos',
  short: 'Shorts',
  about: 'Acerca de mí'
}

const EXTRA_LINKS = {
  stack: 'Stack',
  attribution: 'Atribuciones'
}

const RESOURCES_LINKS = {
  webs: 'Páginas web',
  templates: 'Plantillas'
}

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <section className='footer-social'>
          <ShinyText>#Myshum</ShinyText>
          <h2>LUIS FERNANDO</h2>
          <Social />
        </section>

        <nav className='footer-nav'>
          <div className='footer-navTitle'>
            <h4>General</h4>
            <LayoutIcon />
          </div>
          <div className='footer-links'>
            {Object.entries(GENERAL_LINKS).map(([key, value]) => (
              <Link key={key} href={`/${key}`} className='footer-link titleLink'>
                {value}
              </Link>
            ))}
          </div>
        </nav>

        <nav className='footer-nav'>
          <div className='footer-navTitle'>
            <h4>Extras</h4>
            <VenetianMaskIcon />
          </div>
          <div className='footer-links'>
            {Object.entries(EXTRA_LINKS).map(([key, value]) => (
              <Link key={key} href={`/${key}`} className='footer-link titleLink'>
                {value}
              </Link>
            ))}
          </div>
        </nav>

        <nav className='footer-nav'>
          <div className='footer-navTitle'>
            <h4>Recursos</h4>
            <CuboidIcon />
          </div>
          <div className='footer-links'>
            {Object.entries(RESOURCES_LINKS).map(([key, value]) => (
              <Link key={key} href={`/${key}`} className='footer-link titleLink'>
                {value}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className='footer-copyright'>
        <h3>Copyright © 2025 Luis Fernando.</h3>
        <h5>Derechos reservados a sus respectivos creadores.</h5>
      </div>
    </footer>
  )
}

export default Footer
