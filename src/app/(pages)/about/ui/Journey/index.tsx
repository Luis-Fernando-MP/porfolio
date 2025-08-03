import { INFO, PersonalJourney } from '@/constants'
import { toRelativeTime } from '@/lib/relativeTime'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import { Image } from '@unpic/react/nextjs'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
  journey: PersonalJourney
  title: string
}

const Journey: FC<Props> = ({ journey, title }) => {
  const { text, date, images } = journey
  return (
    <li className='journey'>
      <header className='journey-header frow'>
        <HauiDevLogo size='lg' />
        <div className='mflex'>
          <h3>{title}:</h3>
          <Link href={INFO.linked_in} target='_blank' rel='noopener noreferrer'>
            @{INFO.devName}
          </Link>
        </div>
      </header>

      <section className='journey-content'>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <h6>{toRelativeTime(date)}</h6>
      </section>

      <footer className='journey-images'>
        {images.map(img => {
          const { alt, caption, url, blurHash } = img
          return <Image key={url} src={url} width={100} height={100} loading='lazy' decoding='async' />
        })}
      </footer>
    </li>
  )
}

export default Journey
