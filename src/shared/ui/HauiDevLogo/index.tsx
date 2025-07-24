import { acl } from '@/shared/acl'
import HauiDev from '@/shared/assets/HauiDev.logo'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showShadow?: boolean
  animate?: boolean
}

/**
 * HauiDevLogo component
 * Renders the HauiDev logo inside a styled container.
 *
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='sm'] - Determines the size of the logo container.
 * @param {boolean} [showShadow=true] - If true, applies a shadow to the container for depth effect.
 * @param {boolean} [animate=false] - If true, triggers the stroke animation on the SVG logo.
 * @param {React.HTMLAttributes<HTMLElement>} [props] - Other valid HTML attributes for the section.
 *
 */
const HauiDevLogo: FC<Props> = ({ size = 'sm', className = '', showShadow = true, animate = false, ...props }) => {
  return (
    <section className={`hauidev ${size} ${className} ${acl(showShadow, 'has-shadow')} ${acl(animate, 'animate')}`} {...props}>
      <HauiDev className='hauidev-logo' />
    </section>
  )
}

export default HauiDevLogo
