'use client'

import IconButton from '@/shared/ui/IconButton'
import MiShumDev from '@/shared/ui/MiShumDev'
import {
  BoltIcon,
  BookOpenIcon,
  BriefcaseBusinessIcon,
  GaugeIcon,
  Layers2Icon,
  RocketIcon,
  ShieldCheckIcon,
  UserIcon
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import './style.scss'

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

  return (
    <article className={`mainBar ${className}`}>
      <Link href='/' aria-label='Página principal'>
        <MiShumDev size='sm' full />
      </Link>

      <section className='mainBar-section'>
        {pages.map(page => {
          const { Icon, label, path } = page
          return (
            <Link key={path} href={path} aria-label={label}>
              <IconButton className='border' active={pathname === path}>
                <Icon />
                <h4>{label}</h4>
              </IconButton>
            </Link>
          )
        })}
      </section>

      <section className='mainBar-section'>
        <Link href='/other' aria-label='Relacionados'>
          <IconButton className='border' active={pathname === '/other'}>
            <ShieldCheckIcon />
            <h4>Otros</h4>
          </IconButton>
        </Link>
      </section>
    </article>
  )
}

export default MainBar
