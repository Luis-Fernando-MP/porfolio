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
 * @param {string} size -
 * @param {string} radius -
 */

const HauiDevLogo: FC<Props> = ({ size = 'sm', radius = 'circle', className = '', showShadow, ...props }) => {
  return (
    <section className={`hauidev border ${size} ${radius} ${className}`} {...props}>
      <HauiDev className='hauidev-logo' showShadow={showShadow} />
    </section>
  )
}

export default HauiDevLogo
