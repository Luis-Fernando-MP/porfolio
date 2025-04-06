'use client'

import IconButton from '@/shared/ui/IconButton'
import IconLink from '@/shared/ui/IconLink'
import MiShumDev from '@/shared/ui/MiShumDev'
import ShadowText from '@/shared/ui/ShadowText'
import { BoltIcon, BookOpenIcon, GaugeIcon, MenuIcon, RocketIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

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

const body = typeof document !== 'undefined' ? document.body : null

const MainBar: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname()
  const [show, setShow] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990)
      if (window.innerWidth >= 990) {
        return setShow(true)
      }
      setShow(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const RenderNavbarLinks = () => {
    return (
      <>
        <section className='mainBar-section'>
          {pages.map(page => {
            const { Icon, label, path } = page
            return (
              <IconLink key={path} href={path} className='mainBar-btn border' active={pathname === path} aria-label={label}>
                <Icon />
                <h4>{label}</h4>
              </IconLink>
            )
          })}
        </section>

        <section className='mainBar-section'>
          <IconLink href='/config' className='mainBar-btn border' active={pathname === '/config'} aria-label='Configuraciones'>
            <BoltIcon />
            <h4>Configuración</h4>
          </IconLink>
        </section>
      </>
    )
  }

  return (
    <article className={`mainBar ${className}`}>
      <div className='mainBar-wrapper'>
        <Link href='/' aria-label='Página principal'>
          <MiShumDev size='sm' full />
        </Link>

        {isMobile && (
          <IconButton className='mainBar-menu border' onClick={() => setShow(!show)}>
            <MenuIcon />
            <h4>Páginas</h4>
          </IconButton>
        )}

        {!isMobile && <RenderNavbarLinks />}

        {show &&
          body &&
          isMobile &&
          createPortal(
            <div role='button' tabIndex={0} className='mainBar-modal' onClick={() => setShow(!show)}>
              <ShadowText>Otras rutas</ShadowText>
              <RenderNavbarLinks />
            </div>,
            body
          )}
      </div>
    </article>
  )
}

export default MainBar
