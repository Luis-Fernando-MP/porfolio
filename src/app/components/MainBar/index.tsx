'use client'

import DevCardToggle from '@/app/(home)/ui/DevCardToggle'
import { INFO } from '@/constants'
import IconButton from '@/shared/ui/IconButton'
import { useState } from 'react'

import MusicButton from '../MusicButton'
import UserPreferences from '../UserPreferences'
import HamburgerToggle from './HamburgerToggle'
import LogoLink from './LogoLink'
import './style.scss'
import './userMobile.scss'

interface Props {
  className?: string
  includeDevCard?: boolean
}

const MainBar: React.FC<Props> = ({ className = '', includeDevCard = false }) => {
  const [show, setShow] = useState(false)

  return (
    <article className={`mainBar ${className}`}>
      <div className='mainBar-wrapper border'>
        <LogoLink />

        <div className='mainBar-group frow'>
          <HamburgerToggle show={show} setShow={setShow} />

          <MusicButton className='mainBar-hidden' />
          {includeDevCard && <DevCardToggle />}

          <IconButton noSound className='events-none mainBar-hidden' active>
            <div className='mainBar-point' />
            {INFO.working.state && <h4>Creando ideas con {INFO.working.enterprise}</h4>}
            {!INFO.working.state && <h4>Trabajemos juntos</h4>}
          </IconButton>
        </div>

        {show && <UserPreferences />}
      </div>
    </article>
  )
}

export default MainBar
