import TestimonyComponent from '@/app/ui/Testimony'
import { testimonies } from '@/constants/testimonies'
import SliceContainer from '@/shared/components/SliceContainer'
import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const Comments: FC<Props> = ({ className = '' }) => {
  return (
    <article className={`comments ${className}`}>
      <header className='comments-header'>
        <Title sub='🌱 Algunas' title='Bonitas Palabras' center />
        <p className='comments-description'>
          Fragmentos de gratitud, aprecio y confianza que he recibido de personas con las que he tenido el honor de construir
          algo.
        </p>
      </header>
      <SliceContainer maxHeight={500} reverse>
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
