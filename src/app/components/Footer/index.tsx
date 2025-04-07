import IconLink from '@/shared/ui/IconLink'
import ShinyText from '@/shared/ui/ShinyText'
import Social from '@/shared/ui/Social'
import { CoffeeIcon, CuboidIcon, LayoutIcon, MailMinusIcon, VenetianMaskIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

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
        <section className='footer-section'>
          <ShinyText>#Myshum</ShinyText>
          <h2 className='footer-title'>LUIS FERNANDO</h2>
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

        <section className='footer-section'>
          <ShinyText>Charlemos, estaré encantado de conocerte</ShinyText>
          <IconLink href='#' className='inverse'>
            <h3>luigfmp@gmail.com</h3>
            <MailMinusIcon />
          </IconLink>
          <p>
            Puedes apoyarme
            <br />
            comprándome un café
          </p>
          <IconLink href='#'>
            <CoffeeIcon />
            <h3>Buy now!</h3>
          </IconLink>
        </section>
      </div>

      <div className='footer-copyright'>
        <h3>Copyright © 2025 Luis Fernando.</h3>
        <ShinyText>Derechos reservados a sus respectivos creadores.</ShinyText>
      </div>
    </footer>
  )
}

export default Footer
