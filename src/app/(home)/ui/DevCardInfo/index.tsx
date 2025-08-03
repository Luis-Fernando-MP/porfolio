'use client'

import { INFO } from '@/constants'
import { acl } from '@/shared/acl'
import SliceContainer from '@/shared/components/SliceContainer'
import useDevCardStore from '@/shared/store/devCard.store'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconButton from '@/shared/ui/IconButton'
import Social from '@/shared/ui/Social'
import { InfinityIcon, HandshakeIcon, UserCircle2Icon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { MouseEvent, useEffect, useRef } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { BackgroundImage } from './BackgroundImage'
import './style.scss'
import './userMobile.scss'

const DevCardInfo = () => {
  const { isShowing, setIsShowing } = useDevCardStore()
  const matches = useMediaQuery('(max-width: 1250px)')
  const $closeBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsShowing(!matches)
  }, [matches, setIsShowing])

  const handleClose = () => {
    if (!matches) return
    setIsShowing(false)
  }

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      role='dialog'
      aria-modal='true'
      className={`devCard ${acl(isShowing, 'show')}`}
      onClick={() => $closeBtn.current?.click()}
    >
      <div role='button' tabIndex={0} className='devCard-content' onClick={handleContentClick}>
        <BackgroundImage className='devCard-background' />

        <section className='devCard-wrapper'>
          <div className='devCard-section devCard-closeButton'>
            <IconButton active onClick={handleClose} soundType='BUTTON_OFF' ref={$closeBtn}>
              <XIcon />
              <h4>Cerrar</h4>
            </IconButton>
          </div>

          <IconButton noPadding noSound className='devCard-user'>
            <div className='devCard-status'>
              <HauiDevLogo size='xs' />
            </div>
            <h2 className='font2'>{INFO.name}</h2>
          </IconButton>

          <Social />

          <Link href={INFO.linked_in} target='_blank' rel='noopener noreferrer'>
            <h1 className='devCard-name'>#{INFO.devShortName}</h1>
          </Link>
          <IconButton isLink href={INFO.phone} label='Por WhatsApp' className='active'>
            <HandshakeIcon />
            <h4>Charlemos</h4>
          </IconButton>

          <div className='devCard-section'>
            <div className='mfrow'>
              <UserCircle2Icon />
              <h4>Soy:</h4>
            </div>
            <p>{INFO.resumeAbout}</p>
          </div>
          <div className='devCard-section'>
            <div className='mfrow'>
              <InfinityIcon />
              <h4>Pasatiempos:</h4>
            </div>
            <SliceContainer maxHeight={150} reverse>
              <ul className='devCard-hobbies'>
                {INFO.hobbies.map(hobby => (
                  <li key={hobby} className='devCard-hobby'>
                    <label>{hobby}</label>
                  </li>
                ))}
              </ul>
            </SliceContainer>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DevCardInfo
