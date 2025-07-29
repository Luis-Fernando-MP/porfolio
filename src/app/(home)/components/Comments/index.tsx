import SliceContainer from '@/shared/components/SliceContainer'
import Title from '@/shared/ui/Title'
import type { FC } from 'react'

interface Props {
  className?: string
}

const Comments: FC<Props> = ({ className = '' }) => {
  return (
    <article className={`${className}`}>
      <Title sub='🌱 Algunas' title='Bonitas Palabras' />
      <p className='projects-description'>
        Fragmentos de gratitud, aprecio y confianza que he recibido de personas con las que he tenido el honor de construir algo.
      </p>
      <SliceContainer maxHeight={500} reverse>
        ITEMS
      </SliceContainer>
    </article>
  )
}

export default Comments
