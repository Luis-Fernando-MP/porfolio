import { toRelativeTime } from '@/lib/relativeTime'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react'
import { Marks } from 'contentlayer/generated'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import FolderTag from '../FolderTag'
import './style.scss'

interface Props extends Marks {}

const Post: FC<Props> = mark => {
  const { thumb, last_edited_time, title, folder, id, tags, folder_color } = mark
  return (
    <li className='post'>
      <div className='post-image'>
        <Image src={thumb} alt={title} layout='fullWidth' />
        {last_edited_time && <p className='post-editedTime'>{toRelativeTime(last_edited_time)}</p>}
      </div>

      <ul className='frow'>
        {tags.slice(0, 2).map(tag => (
          <IconButton isTag key={`${tag}-project-${id}`}>
            <p>{tag}</p>
          </IconButton>
        ))}

        {tags.length > 2 && (
          <IconButton isTag>
            <p>+{tags.length - 2} Tags</p>
          </IconButton>
        )}
      </ul>

      <Link href={`/posts/${id}`}>
        <h3 className='post-title ellipsis'>{title}</h3>
      </Link>

      <div className='post-info'>
        <p className='clampText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime minima, fugit molestias nisi culpa omnis
          possimus atque quidem dolorem libero dignissimos ab eveniet quod. Enim maiores consequatur obcaecati veritatis.
        </p>
        <FolderTag name={folder} color={folder_color} />
      </div>

      <IconButton isLink href={`/posts/${id}`} className='post-link' aria-label={`Read more about ${title}`}>
        <ArrowUpRightIcon />
        <h4>Leer</h4>
      </IconButton>
    </li>
  )
}

export default Post
