import ShumLogo from '@/shared/assets/ShumLogo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
  className?: string
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

const ShumDev: FC<Props> = ({ size = 'xs', radius = '', className = '' }) => {
  return (
    <section className={`shumDev ${size} ${radius} ${className}`}>
      <ShumLogo className='shumDev-logo' />
    </section>
  )
}

export default ShumDev
