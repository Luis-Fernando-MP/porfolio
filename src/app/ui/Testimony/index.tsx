import { Testimony } from '@/constants/testimonies'
import { acl } from '@/shared/acl'
import { Image } from '@unpic/react/nextjs'
import { GraduationCapIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  testimony: Testimony
}

const TestimonyComponent: FC<Props> = ({ testimony }) => {
  const { testimonial, profileLink, autor, role, photo, degree } = testimony

  const content = (
    <article
      className={`testimony border ${acl(!!profileLink, 'isLink')}`}
      aria-labelledby={`testimonial-${autor.replace(/\s/g, '-')}`}
    >
      <header className='testimony-header'>
        <Image
          className='testimony-image border'
          src={photo}
          width={50}
          height={50}
          alt={`Photo of ${autor}`}
          loading='lazy'
          fetchPriority='low'
          background='/fallback.webp'
        />
        <div className='testimony-author'>
          <h3>{autor}</h3>
          <h6>{role}</h6>
        </div>
      </header>

      <section className='testimony-body'>
        <div className='testimony-degree mfrow' aria-label='Academic degree'>
          <GraduationCapIcon aria-hidden='true' />
          <h4>{degree}</h4>
        </div>
        <blockquote className='testimony-text'>
          <p>{testimonial}</p>
        </blockquote>
      </section>
    </article>
  )

  if (profileLink)
    return (
      <Link href={profileLink} target='_blank' rel='noopener noreferrer' title={`Read more about ${autor}`}>
        {content}
      </Link>
    )

  return content
}

export default TestimonyComponent
