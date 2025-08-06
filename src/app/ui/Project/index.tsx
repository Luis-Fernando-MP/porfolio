'use client'

import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import { Projects } from 'contentlayer/generated'
import Link from 'next/link'
import type { FC, MouseEvent } from 'react'

import './style.scss'

interface Props extends Projects {}

const Project: FC<Props> = props => {
  const { banner, title, tags, id, allImagesBySections, summary } = props

  const handleOpenImage = (e: MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <article className='project'>
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
        data-gallery-group={id}
        data-gallery-index={allImagesBySections?.length}
        data-gallery-src={banner}
      />

      <div className='project-content'>
        <Link href={`/project/${id}`}>
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
        </Link>
        <div className='project-thumbnails frow'>
          {allImagesBySections?.map(({ thumb, banner }, index) => (
            <Image
              onClick={handleOpenImage}
              key={thumb ?? ''}
              width={35}
              height={35}
              src={thumb ?? ''}
              className='project-thumbnail border'
              alt='Vista en miniatura del proyecto'
              loading='lazy'
              fetchPriority='low'
              background='/fallback.webp'
              role='button'
              tabIndex={0}
              data-gallery-group={id}
              data-gallery-index={index}
              data-gallery-src={banner}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

export default Project
