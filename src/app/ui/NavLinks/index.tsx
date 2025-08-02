import { APP } from '@/constants'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const NavLinks: FC = () => {
  return (
    <nav className='navLinks'>
      {APP.pages.map(({ image, label, path, isCompleted }) => {
        return (
          <IconButton isLink key={`${path}-navLinks`} href={path} className='navLinks-link' disable={!isCompleted}>
            <Image src={image} className='navLinks-image' alt={label} width={30} height={30} loading='lazy' />
            <h4>{label}</h4>
          </IconButton>
        )
      })}
    </nav>
  )
}

export default NavLinks
