import { acl } from '@/shared/acl'
import ShumLogo from '@/shared/assets/ShumLogo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' // Tamaño del logo de Shum Dev.
  radius?: 'circle' | 'rounded' | 'none' // Radio del logo de Shum Dev.
  transparent?: boolean // Indica si el fondo es transparente.
  className?: string // Clases CSS adicionales para personalización.
}

/**
 * Componente que representa el logo de Shum Dev.
 *
 * @param {string} size - El tamaño del logo de Shum Dev. Puede ser 'xs', 'sm', 'md', 'lg' o 'xl'.
 * @param {string} radius - El radio del logo de Shum Dev. Puede ser 'circle', 'rounded' o 'none'.
 * @param {boolean} transparent - Indica si el logo debe tener un fondo transparente.
 * @param {string} className - Clases CSS adicionales para personalizar el componente.
 * @returns {JSX.Element} El componente Shum Dev.
 */

const ShumDev: FC<Props> = ({ size = 'xs', radius = 'rounded', transparent = false, className = '' }) => {
  return (
    <div className={className}>
      <section className={`shumDev ${size} ${radius} ${acl(transparent, 'transparent')}`}>
        <ShumLogo className='shumDev-logo' />
      </section>
    </div>
  )
}

export default ShumDev
