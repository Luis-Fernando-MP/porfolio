'use client'

import IconButton from '@/shared/ui/IconButton'
import IconLink from '@/shared/ui/IconLink'
import MiShumDev from '@/shared/ui/MiShumDev'
import { BoltIcon, BookOpenIcon, GaugeIcon, MenuIcon, RocketIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC, useState } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  className?: string
}

const pages = [
  {
    path: '/blog',
    label: 'Blog',
    Icon: BookOpenIcon
  },
  {
    path: '/projects',
    label: 'Proyectos',
    Icon: RocketIcon
  },
  {
    path: '/shorts',
    label: 'Shorts',
    Icon: GaugeIcon
  },
  {
    path: '/about',
    label: 'Acerca de mi',
    Icon: UserIcon
  }
]

const MainBar: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname()
  const [show, setShow] = useState(true)

  return (
    <article className={`mainBar ${className}`}>
      <div className='mainBar-wrapper'>
        <Link href='/' aria-label='Página principal'>
          <MiShumDev size='sm' full />
        </Link>

        <IconButton className='mainBar-menu border' onClick={() => setShow(!show)}>
          <MenuIcon />
          <h4>Páginas</h4>
        </IconButton>

        {show && (
          <section className='mainBar-section mainBar-pages'>
            {pages.map(page => {
              const { Icon, label, path } = page
              return (
                <IconLink key={path} href={path} className='border' active={pathname === path} aria-label={label}>
                  <Icon />
                  <h4>{label}</h4>
                </IconLink>
              )
            })}
          </section>
        )}

        <section className='mainBar-section'>
          <Link href='/other' aria-label='Relacionados'>
            <IconButton className='border' active={pathname === '/other'}>
              <BoltIcon />
              <h4>Otros</h4>
            </IconButton>
          </Link>
        </section>
      </div>
    </article>
  )
}

export default MainBar
