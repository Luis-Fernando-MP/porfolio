import { acl } from '@/shared/acl'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  label?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  outline?: boolean
  className?: string
  transparent?: boolean
  active?: boolean
  contentClass?: string
}

/**
 * @param {ReactNode} children - The content of the link.
 * @param {string} href - The URL the link points to.
 * @param {string} label - The label of the link.
 * @param {string} position - The position of the label.
 * @param {boolean} outline - Whether the link is outlined.
 * @param {string} className - The class name of the link.
 * @param {boolean} transparent - Whether the link is transparent.
 * @param {boolean} active - Whether the link is active.
 * @param {string} contentClass - The class name of the content.
 */

const IconLink: FC<Props> = ({
  children,
  href,
  label,
  position = 'top',
  outline = false,
  className = '',
  transparent = false,
  active = false,
  contentClass = '',
  ...props
}) => {
  const parsedClassName = `iconLink ${acl(outline, 'outline')} ${acl(transparent, 'transparent')} ${acl(active, 'active')} ${className}`

  return (
    <Link href={href} className={parsedClassName} {...props}>
      <div className={`iconLink-content ${contentClass}`}>{children}</div>
      {label && (
        <LabelText type='darken' className={`iconLink-label ${position}`}>
          {label}
        </LabelText>
      )}
    </Link>
  )
}

export default IconLink
