'use client'

import DevCardToggle from '@/app/(home)/ui/DevCardToggle'
import { INFO } from '@/constants'
import useSound from '@/shared/hook/useSound'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconButton from '@/shared/ui/IconButton'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { type FC, useState } from 'react'

import MusicButton from '../MusicButton'
import UserPreferences from '../UserPreferences'
import './style.scss'
import './userMobile.scss'

interface Props {
  className?: string
}

const MainBar: FC<Props> = ({ className = '' }) => {
  const [show, setShow] = useState(false)
  const [openPlay] = useSound('MENU_OPEN', { interrupt: true })
  const [closePlay] = useSound('MENU_CLOSE', { interrupt: true })

  const handleToggleMenu = (): void => {
    if (show) closePlay()
    else openPlay()
    setShow(!show)
  }

  return (
    <article className={`mainBar ${className}`}>
      <div className='mainBar-wrapper border'>
        <Link href='/' aria-label='Página principal' className='mainBar-logo frow'>
          <HauiDevLogo size='md' animate />
          <h3 className='font2'>{INFO.devName}</h3>
        </Link>

        <div className='mainBar-group frow'>
          <IconButton onClick={handleToggleMenu} transparent noSound>
            <MenuIcon />
            <h4>Menu</h4>
          </IconButton>

          <MusicButton className='mainBar-hidden' />

          <DevCardToggle />

          <IconButton className='events-none mainBar-hidden' active>
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
