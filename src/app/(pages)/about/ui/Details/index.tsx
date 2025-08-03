import { personalJourneys } from '@/constants'
import SliceContainer from '@/shared/components/SliceContainer'
import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import Journey from '../Journey'
import './style.scss'
import './userMobile.scss'

const Details: FC = () => {
  return (
    <article className='details'>
      <Title sub='✨ Dime' title='HAUI' />
      <p className='description'>
        <b>Soy desarrollador y diseñador de aplicaciones full stack</b>, pero mi fuerte es la creación de <b>aplicaciones web</b>{' '}
        funcionales e interactivas centradas en el usuario.
      </p>
      <SliceContainer parentClassName='details-sliceContainer' maxHeight={1500} reverse overlayColor='var(--bg-primary)'>
        <ul className='details-list'>
          {Object.entries(personalJourneys).map(items => {
            const [title, journey] = items
            return <Journey key={journey.id} journey={journey} title={title} />
          })}
        </ul>
      </SliceContainer>
      <section className='projects-section'></section>
    </article>
  )
}

export default Details
