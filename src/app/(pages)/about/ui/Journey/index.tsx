import { INFO, JourneysImage, PersonalJourney } from '@/constants'
import { toRelativeTime } from '@/lib/relativeTime'
import ImageGallery from '@/shared/components/FocusGallery/ImageGallery'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  journey: PersonalJourney
  title: string
}

const Journey: FC<Props> = ({ journey, title }) => {
  const { text, date, images, id: journeyId } = journey

  return (
    <article className='journey' itemScope itemType='https://schema.org/CreativeWork'>
      <header className='journey-header frow'>
        <HauiDevLogo size='md' />
        <div className='mflex'>
          <h3 itemProp='headline'>{title}:</h3>
          <Link
            href={INFO.linked_in}
            target='_blank'
            rel='noopener noreferrer author external'
            aria-label={`Perfil de LinkedIn de ${INFO.devName}`}
            itemProp='author'
          >
            @{INFO.devName}
          </Link>
        </div>
      </header>

      <section className='journey-section journey-content' itemProp='text'>
        <div className='journey-paragraph' dangerouslySetInnerHTML={{ __html: text }} />
        <time itemProp='datePublished'>
          <i>{toRelativeTime(date)}</i>
        </time>
      </section>

      {images.length > 0 && (
        <footer className='journey-section journey-footer'>
          <ul className='frow'>
            {images.map((image, index) => {
              const { caption, src, action, actionText } = image as any as JourneysImage
              return (
                <li key={`${src}-journey-image`} itemProp='image'>
                  <ImageGallery
                    className='journey-image'
                    src={src}
                    width={90}
                    height={50}
                    alt={caption ?? 'Imagen del recorrido'}
                    loading='lazy'
                    fetchPriority='low'
                    index={index}
                    groupId={journeyId}
                    caption={caption}
                    action={action}
                    actionText={actionText}
                  />
                </li>
              )
            })}
          </ul>
        </footer>
      )}
    </article>
  )
}

export default Journey
