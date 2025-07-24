import { acl } from '@/shared/acl'
import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  children?: string
  Icon?: JSX.Element
  className?: string
  transparent?: boolean
}

/**
 * @param {string} children - The label content. Accepts plain text.
 * @param {JSX.Element} Icon - Optional icon element displayed before the text.
 * @param {string} className - Additional custom classes for styling.
 * @param {boolean} transparent - If true, applies the transparent style.
 */
const LabelText: FC<Props> = ({ children, Icon, className = '', transparent = false }) => {
  const parsedClass = `label ${className} ${acl(transparent, 'transparent')}`

  return (
    <div className={parsedClass.trim()}>
      {Icon}
      {children && <p>{children}</p>}
    </div>
  )
}

export default LabelText
