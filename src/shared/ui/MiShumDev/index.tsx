import ShumLogo from '@/shared/assets/ShumLogo'
import type { FC, HtmlHTMLAttributes } from 'react'

import ShinyText from '../ShinyText'
import './style.scss'
import './userMobile.scss'

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
  full?: boolean
}

/**
 * Componente que representa el logo de Shum Dev.
 *
 * @param {string} size - El tamaño del logo de Shum Dev. Puede ser 'xs', 'sm', 'md', 'lg' o 'xl'.
 * @param {string} radius - El radio del logo de Shum Dev. Puede ser 'circle', 'rounded' o 'none'.
 * @returns {JSX.Element} El componente Shum Dev.
 */

const MiShumDev: FC<Props> = ({ size = 'sm', radius = 'rounded', className = '', full = false, ...props }) => {
  return (
    <section className={`miShumDev border ${size} ${radius} ${className}`} {...props}>
      <ShumLogo className='miShumDev-logo' />
      {full && <ShinyText>Mishum dev</ShinyText>}
    </section>
  )
}

export default MiShumDev
