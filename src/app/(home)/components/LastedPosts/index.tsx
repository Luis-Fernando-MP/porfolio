import Post from '@/app/components/Post'
import { allMarks } from 'contentlayer/generated'
import type { FC } from 'react'

import './style.scss'

const LastedPosts: FC = () => {
  return (
    <section className='lastedPosts'>
      {allMarks.map(mark => {
        return <Post {...mark} key={mark.id} />
      })}
    </section>
  )
}

export default LastedPosts
