import { acl } from '@/shared/acl'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children?: ReactNode | ReactNode[] | null
  label?: string
  label_position?: 'top' | 'bottom' | 'left' | 'right'
  border?: boolean
  className?: string
  transparent?: boolean
  active?: boolean
  contentClass?: string
}

/**
 * IconLink component with optional tooltip label and style modifiers.
 *
 * @param children - The content inside the link (usually an icon or text).
 * @param href - Destination URL or route.
 * @param label - Optional tooltip label to describe the link.
 * @param label_position - Tooltip position ('top' | 'bottom' | 'left' | 'right').
 * @param border - Adds a border around the link container.
 * @param className - Additional class names for the link.
 * @param transparent - Removes background color when true.
 * @param active - Applies active style.
 * @param contentClass - Additional class names for the content wrapper.
 */
const IconLink: FC<Props> = ({
  children,
  href,
  label,
  label_position = 'top',
  border = false,
  className = '',
  transparent = false,
  active = false,
  contentClass = '',
  ...props
}) => {
  const parsedClassName = ['iconLink', acl(border, 'border'), acl(transparent, 'transparent'), acl(active, 'active'), className]
    .filter(Boolean)
    .join(' ')

  return (
    <Link href={href} className={parsedClassName} {...props}>
      <div className={`iconLink-content ${contentClass}`}>{children}</div>
      {label && <LabelText className={`iconLink-label ${label_position}`}>{label}</LabelText>}
    </Link>
  )
}

export default IconLink
