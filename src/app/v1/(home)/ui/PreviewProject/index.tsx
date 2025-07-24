import { parseTitleToLink } from '@/lib/parseTitle'
import SpotlightCard from '@/shared/components/SpotlightCard'
import TransitionContent from '@/shared/components/TransitionContent'
import IconLink from '@/shared/ui/IconLink'
import Tags from '@/shared/ui/Tags'
import { Image } from '@unpic/react'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  title: string
  resume: string
  images: string[]
  tags: string[]
}

const PreviewProject: FC<Props> = ({ images, resume, tags, title }) => {
  const projectURL = `/projects/${parseTitleToLink(title)}`

  return (
    <TransitionContent className='previewProject'>
      <SpotlightCard className='previewProject-spotlight border'>
        <div className='previewProject-description'>
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
        </div>
      </SpotlightCard>

      <aside className='previewProject-images' aria-label='Imágenes del proyecto' itemProp='image'>
        {images.map(image => (
          <Image
            key={`${image}-preview-project`}
            className='previewProject-image'
            src={image}
            width={150}
            height={180}
            alt={`Imagen del proyecto ${title}`}
          />
        ))}
      </aside>
    </TransitionContent>
  )
}

export default PreviewProject
