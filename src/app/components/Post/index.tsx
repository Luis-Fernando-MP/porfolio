import { toRelativeTime } from '@/lib/relativeTime'
import { BackImage } from '@/shared/components/BackImage'
import { Marks } from 'contentlayer/generated'
import { ClockIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props extends Marks {}

const Post: FC<Props> = ({ thumb, last_edited_time, title, folder, image_blur, id }) => {
  return (
    <section className='post border'>
      <BackImage className='post-background' src={thumb} blur={image_blur} alt={title} />
      <Link href={`/posts/${id}`}>
        <h3 className='post-title'>{title}</h3>
      </Link>
      <p className='post-folder'>{folder}</p>
      <div className='post-date'>
        <ClockIcon />
        {toRelativeTime(last_edited_time)}
      </div>
    </section>
  )
}

export default Post
