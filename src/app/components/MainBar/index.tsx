'use client'

import ThemeController from '@/shared/components/ThemeController'
import IconButton from '@/shared/ui/IconButton'
import ShumDev from '@/shared/ui/ShumDev'
import { BoltIcon, BookOpenIcon, BriefcaseBusinessIcon, Layers2Icon, RocketIcon, ShieldCheckIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const pages = [
  {
    path: '/about',
    label: 'Acerca de mi',
    icon: UserIcon
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: BookOpenIcon
  },
  {
    path: '/projects',
    label: 'Proyectos',
    icon: RocketIcon
  },
  {
    path: '/stack',
    label: 'Stack',
    icon: Layers2Icon
  },
  {
    path: '/work',
    label: 'Trabajo',
    icon: BriefcaseBusinessIcon
  }
]

const MainBar: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname()

  return (
    <article className={`mainBar border ${className}`}>
      <Link href='/' aria-label='Página principal'>
        <ShumDev size='sm' radius='circle' />
      </Link>

      <div className='separator' />

      <section className='mainBar-section'>
        {pages.map(page => (
          <Link key={page.path} href={page.path} aria-label={page.label}>
            <IconButton label={page.label} transparent active={pathname === page.path}>
              <page.icon />
            </IconButton>
          </Link>
        ))}
      </section>

      <div className='separator' />

      <section className='mainBar-section'>
        <Link href='/certificates' aria-label='Mis certificados'>
          <IconButton label='Mis certificados' transparent active={pathname === '/certificates'}>
            <ShieldCheckIcon />
          </IconButton>
        </Link>

        <IconButton label='Personalizar' transparent>
          <BoltIcon />
        </IconButton>

        <ThemeController />
      </section>
    </article>
  )
}

export default MainBar
