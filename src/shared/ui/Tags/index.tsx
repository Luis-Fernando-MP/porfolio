import type { FC } from 'react'

import './style.scss'
import Tag from './tag'

interface Props {
  tags: string[]
  keyParent: string
  areLinks?: boolean
}

const Tags: FC<Props> = ({ tags, keyParent, areLinks }) => {
  return (
    <div className='tags'>
      {tags.map(tag => (
        <Tag key={`${tag}-from-${keyParent}`} isLink={areLinks}>
          {tag}
        </Tag>
      ))}
    </div>
  )
}

export default Tags
