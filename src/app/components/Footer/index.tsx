import { INFO } from '@/constants'
import { LINK_GROUPS } from '@/constants/navbar'
import { acl } from '@/shared/acl'
import IconLink from '@/shared/ui/IconLink'
import Social from '@/shared/ui/Social'
import { CoffeeIcon, MailMinusIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const Footer: FC = () => {
  return (
    <footer className='footer' aria-label='Footer navigation and contact'>
      <div className='footer-info'>
        <section className='footer-section footer-user'>
          <div className='footer-user__name'>
            <h6 className='footer-haui'>#HAUI</h6>
            <div className='dualTitle' aria-label='Author name'>
              <h2 className='dualTitle-bold'>LUIS</h2>
              <h2 className='dualTitle-especial'>FERNANDO</h2>
            </div>
          </div>
          <Social />
        </section>

        {LINK_GROUPS.map(({ title, icon: Icon, links, className }) => (
          <nav key={title} className={`footer-nav ${className}`} aria-label={title}>
            <div className='footer-navTitle'>
              <Icon aria-hidden='true' />
              <h6>{title}</h6>
            </div>
            <ul className='footer-links'>
              {links.map(({ path, label, isCompleted }) => (
                <li key={path}>
                  <Link href={path} className={`footer-link ${acl(isCompleted, 'completed')}`}>
                    <h5>{label}</h5>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <section className='footer-section footer-say'>
          <div className='footer-say__group'>
            <h4 className='footer-say__paragraph'>Charlemos, estaré encantado de conocerte</h4>
            <IconLink href='mailto:luigfmp@gmail.com' className='' border label='Hablemos!!' active>
              <MailMinusIcon />
              <address>
                <h4>{INFO.mail}</h4>
              </address>
            </IconLink>
          </div>

          <div className='footer-say__group'>
            <h5 className='footer-say__paragraph'>Puedes apoyarme comprándome un café</h5>
            <IconLink href='#' border>
              <CoffeeIcon />
              <h4>Buy now!</h4>
            </IconLink>
          </div>
        </section>
      </div>

      <section className='footer-copyright'>
        <h4>Copyright &copy; 2025 {INFO.name.toUpperCase()}</h4>
        <h5>All content belongs to their respective creators</h5>
      </section>
    </footer>
  )
}

export default Footer
