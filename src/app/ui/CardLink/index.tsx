import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react'

import './style.scss'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode | null
  href: string
}

const CardLink: FC<Props> = ({ children, className, ...props }) => {
  return (
    <Link {...props} className={`cardLink border ${className}`}>
      <div className='cardLink-arrow border'>
        <ArrowUpRightIcon />
      </div>
      {children}
    </Link>
  )
}

export default CardLink
