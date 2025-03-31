import CardLink from '@/app/ui/CardLink'
import { testimonies } from '@/constants/testimonies'
import type { FC } from 'react'

const Testimonies: FC = () => {
  return (
    <>
      {testimonies.map(t => {
        const { id, autor, rol, profileLink, testimonial } = t
        return (
          <CardLink href={profileLink} key={id} className='about-testimonial' target='_blank' rel='noopener noreferrer'>
            <h3 className='about-author'># {autor}</h3>
            <h5>{rol}</h5>
            <p className='about-description'>{testimonial}</p>
          </CardLink>
        )
      })}
    </>
  )
}

export default Testimonies
