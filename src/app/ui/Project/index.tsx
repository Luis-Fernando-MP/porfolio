import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react'
import { Projects } from 'contentlayer/generated'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props extends Projects {}

const Project: FC<Props> = props => {
  const { banner, title, tags, id, allImagesBySections, summary } = props

  return (
    <Link href={`/project/${id}`} className='project border'>
      <Image className='project-background' src={banner} layout='fullWidth' alt={`Vista previa del proyecto ${title}`} />

      <div className='project-content'>
        <header>
          <h3 className='project-title'>{title}</h3>
        </header>

        <div className='project-section'>
          <p className='project-summary'>{summary}</p>

          <ul className='frow'>
            {tags.slice(0, 2).map(tag => (
              <IconButton isTag key={`${tag}-project-${id}`} className='project-tag'>
                <p>{tag}</p>
              </IconButton>
            ))}

            {tags.length > 2 && (
              <IconButton isTag className='project-tag'>
                <p>+{tags.length - 2} Tags</p>
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
              loading='lazy'
              fetchPriority='low'
              background='/fallback.webp'
              alt='Vista en miniatura del proyecto'
            />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project
