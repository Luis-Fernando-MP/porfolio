import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props {
  children: string
  isLink?: boolean
}

const Tag: FC<Props> = ({ children, isLink = false }) => {
  return (
    <div className='tag'>
      {isLink && (
        <Link href={`/related/${children.toLocaleLowerCase()}`} className='titleLink'>
          #{children}
        </Link>
      )}

      {!isLink && <span>{children}</span>}
    </div>
  )
}

export default Tag
