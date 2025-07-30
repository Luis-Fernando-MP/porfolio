import { Image } from '@unpic/react'
import { Projects } from 'contentlayer/generated'
import Link from 'next/link'
import type { FC } from 'react'

interface Props extends Projects {}

const Project: FC<Props> = props => {
  const { thumb, aspectRatio, title, tags, id, allImagesBySections } = props

  console.log('allImagesBySections', allImagesBySections)
  return (
    <div className='project'>
      <Image className='project-background' src={thumb} aspectRatio={aspectRatio} layout='fullWidth' />
      <div className='project-card'>
        <h3>{title}</h3>

        <div className='project-section'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, architecto vitae dolor nihil natus dolorum quos
            iure
          </p>
          <div className='project-tags'>
            {tags.map(tag => {
              return (
                <Link key={`${tag}-project-${id}`} href='/'>
                  {tag}
                </Link>
              )
            })}
          </div>

          <div className='project-images'>
            {allImagesBySections?.map(images => {
              const { banner, thumb } = images
              return (
                <Image
                  key={banner ?? ''}
                  width={50}
                  height={50}
                  src={banner ?? ''}
                  className='project-image'
                  loading='lazy'
                  fetchPriority='low'
                  background='/fallback.webp'
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
