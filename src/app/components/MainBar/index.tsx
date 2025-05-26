'use client'

import { INFO } from '@/constants'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconButton from '@/shared/ui/IconButton'
import ShinyText from '@/shared/ui/ShinyText'
import { Image } from '@unpic/react'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { type FC, useState } from 'react'

import UserPreferences from '../UserPreferences'
import './style.scss'
import './userMobile.scss'

interface Props {
  className?: string
}

const MainBar: FC<Props> = ({ className = '' }) => {
  const [show, setShow] = useState(false)

  return (
    <article className={`mainBar ${className}`}>
      <div className='mainBar-wrapper'>
        <Link href='/' aria-label='Página principal' className='mainBar-logo'>
          <HauiDevLogo />
          <div className='mainBar-logo__devName border'>
            <ShinyText>{INFO.dev_name}</ShinyText>
          </div>
        </Link>

        <IconButton className='border' onClick={() => setShow(!show)}>
          <MenuIcon />
          <h4>Menu</h4>
        </IconButton>

        <div className='mainBar-currentWork active'>
          {INFO.working.state && <h4>Creando ideas con {INFO.working.enterprise}</h4>}
          {!INFO.working.state && <h4>Listo para desarrollar contigo</h4>}
        </div>

        <button className='mainBar-music'>
          <Image src='/assets/pages/music.webp' width={37} height={37} alt='resonance music' />
        </button>
        {show && <UserPreferences />}
      </div>
    </article>
  )
}

export default MainBar
