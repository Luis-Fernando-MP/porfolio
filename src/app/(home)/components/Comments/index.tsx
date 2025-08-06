import TestimonyComponent from '@/app/ui/Testimony'
import { testimonies } from '@/constants/testimonies'
import SliceContainer from '@/shared/components/SliceContainer'
import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  className?: string
}

const Comments: FC<Props> = ({ className = '' }) => {
  return (
    <article className={`comments ${className}`}>
      <header className='home-header'>
        <Title emoji='🌱' sub='Algunas' title='Bonitas Palabras' center />
        <p className='description'>
          Fragmentos de gratitud, aprecio y confianza que he recibido de personas con las que he tenido el honor de construir
          algo.
        </p>
      </header>
      <SliceContainer parentClassName='comments-sliceContainer' maxHeight={500} reverse overlayColor='var(--bg-primary)'>
        <ul className='comments-testimonies'>
          {testimonies.map(testimony => {
            return <TestimonyComponent key={testimony.id} testimony={testimony} />
          })}
        </ul>
      </SliceContainer>
    </article>
  )
}

export default Comments
