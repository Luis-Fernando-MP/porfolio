'use client'

import NavLinks from '@/app/ui/NavLinks'
import { INFO } from '@/constants'
import { acl } from '@/shared/acl'
import SliceContainer from '@/shared/components/SliceContainer'
import useDevCardStore from '@/shared/store/devCard.store'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconLink from '@/shared/ui/IconLink'
import Social from '@/shared/ui/Social'
import { InfinityIcon, HandshakeIcon, UserCircle2Icon } from 'lucide-react'
import Link from 'next/link'
import { MouseEvent, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { BackgroundImagesWrapper } from '../BackgroundImages/BackgroundImagesWrapper'
import './style.scss'
import './userMobile.scss'

const DevCardInfo = () => {
  const { isShowing, setIsShowing } = useDevCardStore()
  const matches = useMediaQuery('(max-width: 990px)')

  useEffect(() => {
    setIsShowing(!matches)
  }, [matches, setIsShowing])

  const handleOverlayClick = () => {
    if (matches) setIsShowing(false)
  }

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div role='dialog' aria-modal='true' className={`devCard ${acl(isShowing, 'show')}`} onClick={handleOverlayClick}>
      <div role='button' tabIndex={0} className='devCard-content' onClick={handleContentClick}>
        <BackgroundImagesWrapper height={110} className='devCard-background' />

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
            <SliceContainer maxHeight={150} reverse>
              <ul className='devCard-hobbies'>
                {INFO.hobbies.map(hobby => (
                  <li key={hobby} className='devCard-hobby'>
                    <p>{hobby}</p>
                  </li>
                ))}
              </ul>
            </SliceContainer>
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
      </div>
    </div>
  )
}

export default DevCardInfo
