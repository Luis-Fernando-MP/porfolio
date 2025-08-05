import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import { Projects } from 'contentlayer/generated'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props extends Projects {}

const Project: FC<Props> = props => {
  const { banner, title, tags, id, allImagesBySections, summary } = props

  return (
    <Link href={`/project/${id}`} className='project border'>
      <Image
        alt={`Vista previa del proyecto ${title}`}
        className='project-background'
        src={banner}
        width={300}
        height={450}
        layout='fullWidth'
        fetchPriority='high'
        priority
        background='/fallback.webp'
      />

      <div className='project-content'>
        <header>
          <h3 className='ellipsis'>{title}</h3>
        </header>

        <div className='project-section'>
          <p className='clampText'>{summary}</p>

          <ul className='frow'>
            {tags.slice(0, 2).map(tag => (
              <IconButton isTag key={`${tag}-project-${id}`}>
                <label>{tag}</label>
              </IconButton>
            ))}

            {tags.length > 2 && (
              <IconButton isTag>
                <label>+{tags.length - 2} Tags</label>
              </IconButton>
            )}
          </ul>
        </div>

        <div className='project-thumbnails frow'>
          {allImagesBySections?.map(({ thumb }) => (
            <Image
              key={thumb ?? ''}
              width={35}
              height={35}
              src={thumb ?? ''}
              className='project-thumbnail border'
              alt='Vista en miniatura del proyecto'
              loading='lazy'
              fetchPriority='low'
              background='/fallback.webp'
            />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project
