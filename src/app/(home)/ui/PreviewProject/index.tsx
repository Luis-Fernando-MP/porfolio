import SpotlightCard from '@/shared/components/SpotlightCard'
import { parseTitleToLink } from '@/shared/parseTitle'
import IconLink from '@/shared/ui/IconLink'
import Tags from '@/shared/ui/Tags'
import { Image } from '@unpic/react'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props {
  title: string
  resume: string
  images: string[]
  tags: string[]
}

const PreviewProject: FC<Props> = ({ images, resume, tags, title }) => {
  const projectURL = `/projects/${parseTitleToLink(title)}`

  return (
    <li className='previewProject' itemScope itemType='http://schema.org/CreativeWork'>
      <SpotlightCard className='previewProject-spotlight border' contentClass='previewProject-description'>
        <Link href={projectURL} id={`project-title-${projectURL}`} aria-label={`Enlace al proyecto ${title}`} itemProp='url'>
          <h2 className='previewProject-title titleLink' itemProp='name'>
            #{title}
          </h2>
        </Link>
        <p
          className='previewProject-resume'
          id={`project-resume-${projectURL}`}
          aria-label={`Resumen del proyecto ${title}`}
          itemProp='description'
        >
          {resume}
        </p>
        <div className='previewProject-tags' aria-label='Etiquetas del proyecto'>
          <Tags tags={tags} keyParent='project-preview' areLinks />
        </div>

        <IconLink
          href={projectURL}
          className='previewProject-button border'
          aria-label={`Ver proyecto ${title}`}
          itemProp='potentialAction'
        >
          <h4>Ver proyecto</h4>
          <div className='previewProject-arrowIcon' aria-hidden='true'>
            <ChevronRightIcon />
          </div>
        </IconLink>
      </SpotlightCard>

      <aside className='previewProject-images' aria-label='Imágenes del proyecto' itemProp='image'>
        {images.map(image => (
          <Image
            key={`${image}-preview-project`}
            src={image}
            width={140}
            height={170}
            className='previewProject-image'
            alt={`Imagen del proyecto ${title}`}
          />
        ))}
      </aside>
    </li>
  )
}

export default PreviewProject
