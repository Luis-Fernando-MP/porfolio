'use client'

import { INFO } from '@/constants'
import useSound from '@/shared/hook/useSound'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import Link from 'next/link'

const LogoLink: React.FC = () => {
  const [play] = useSound('BUTTON_OFF', { interrupt: true })

  return (
    <Link href='/' aria-label={`Página principal de ${INFO.devName}`} className='mainBar-logo frow' onClick={() => play()}>
      <HauiDevLogo size='md' animate />
      <h3 className='font2'>{INFO.devName}</h3>
    </Link>
  )
}

export default LogoLink
