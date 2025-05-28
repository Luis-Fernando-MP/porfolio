import NavLinks from '@/app/ui/NavLinks'
import { INFO } from '@/constants'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconLink from '@/shared/ui/IconLink'
import Social from '@/shared/ui/Social'
import { InfinityIcon, HandshakeIcon, UserCircle2Icon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { BackgroundImagesWrapper } from '../BackgroundImages/BackgroundImagesWrapper'
import './style.scss'

const DevCardInfo: FC = () => {
  return (
    <section className='devCard'>
      <BackgroundImagesWrapper height={115} className='devCard-background' />

      <section className='devCard-wrapper'>
        <Link href={INFO.github} target='_blank' rel='noopener noreferrer'>
          <h1 className='devCard-name'>#{INFO.devShortName}</h1>
        </Link>

        <div className='devCard-section frow'>
          <div className='devCard-status__logo'>
            <HauiDevLogo size='md' />
          </div>
          <h3>{INFO.name}</h3>
        </div>

        <div className='devCard-section'>
          <div className='frow'>
            <UserCircle2Icon />
            <h4>Soy:</h4>
          </div>
          <p>{INFO.resumeAbout}</p>
        </div>

        <div className='devCard-section'>
          <div className='frow'>
            <InfinityIcon />
            <h4>Pasatiempos:</h4>
          </div>
          <ul className='devCard-hobbies'>
            {INFO.hobbies.map(hobby => (
              <li key={hobby} className='devCard-hobby'>
                <p> {hobby}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='devCard-section'>
          <IconLink href={INFO.phone} label='En WhatsApp' className='active'>
            <HandshakeIcon />
            <h4>Charlemos</h4>
          </IconLink>
        </div>

        <Social />
        <NavLinks />
      </section>
    </section>
  )
}

export default DevCardInfo
