import Post from '@/app/components/Post'
import IconButton from '@/shared/ui/IconButton'
import Title from '@/shared/ui/Title'
import { allMarks } from 'contentlayer/generated'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const LatestPosts: FC<Props> = ({ className = '' }) => {
  return (
    <article className={`lastedPosts ${className}`} aria-label='Últimos posts'>
      <header className='home-header'>
        <Title emoji='✍️' sub='Mis' title='Últimos Posts' center />
        <p className='description'>
          Estos son algunos de mis apuntes que he ido escribiendo durante camino en nuevo campo lleno de rosas.
        </p>
      </header>

      <IconButton active isLink href='/posts' aria-label='Ver más posts'>
        <ArrowRightIcon />
        <h4>Ver más proyectos</h4>
      </IconButton>

      <ul className='lastedPosts-list frow'>
        {allMarks.splice(0, 6).map(mark => {
          return <Post {...mark} key={mark.id} />
        })}
      </ul>
    </article>
  )
}

export default LatestPosts
