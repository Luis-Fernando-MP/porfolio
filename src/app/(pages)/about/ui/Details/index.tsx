import { personalJourneys } from '@/constants'
import SliceContainer from '@/shared/components/SliceContainer'
import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import Journey from '../Journey'
import './index.scss'

const Details: FC = () => {
  return (
    <article className='details' itemScope itemType='https://schema.org/Person'>
      <header className='details-header'>
        <Title emoji='✨' sub='Dime' title='HAUI' />
        <p className='description' itemProp='description'>
          <b>Soy desarrollador y diseñador de aplicaciones full stack</b>, pero mi fuerte es la creación de{' '}
          <b>aplicaciones web</b> funcionales e interactivas centradas en el usuario.
        </p>
      </header>

      <SliceContainer reverse maxHeight={300} overlayColor='var(--bg-primary)'>
        <div className='details-journeys'>
          {Object.entries(personalJourneys).map(items => {
            const [title, journey] = items
            return <Journey key={journey.id} journey={journey} title={title} />
          })}
        </div>
      </SliceContainer>
    </article>
  )
}

export default Details
