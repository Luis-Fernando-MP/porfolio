import { APP } from '@/constants'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

type PageLabel = (typeof APP.pages)[number]['label']

interface Props {
  include?: 'all' | PageLabel[]
}

const NavLinks: FC<Props> = ({ include = 'all' }) => {
  const filteredPages = include === 'all' ? APP.pages : APP.pages.filter(page => include.includes(page.label))

  return (
    <nav className='navLinks'>
      {filteredPages.map(({ Icon, image, label, path }) => (
        <Link key={path} href={path} className='navLinks-link fade border' style={{ backgroundImage: `url(${image})` }}>
          <div className='navLinks-content'>
            <Icon />
            <h4>{label}</h4>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default NavLinks
