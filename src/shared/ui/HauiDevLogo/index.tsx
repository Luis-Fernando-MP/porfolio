import HauiDev from '@/shared/assets/HauiDev.logo'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
  showShadow?: boolean
}

/**
 * Logo component
 *
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='sm'] - Sets the size of the logo container
 * @param {'circle' | 'rounded' | 'none'} [radius='circle'] - Border radius style of the container
 * @param {boolean} [showShadow] - Whether to apply a shadow effect to the logo
 * @param {string} [className] - Additional class names for styling
 * @returns {JSX.Element} A section element containing the HauiDev logo
 *
 */
const HauiDevLogo: FC<Props> = ({ size = 'sm', radius = 'circle', className = '', showShadow, ...props }) => {
  return (
    <section className={`hauidev border ${size} ${radius} ${className}`} {...props}>
      <HauiDev className='hauidev-logo' showShadow={showShadow} />
    </section>
  )
}

export default HauiDevLogo
