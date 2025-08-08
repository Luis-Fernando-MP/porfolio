import { techQuery } from '@/lib/techQuery'
import Title from '@/shared/ui/Title'
import { Image } from '@unpic/react/nextjs'
import type { FC } from 'react'

import MyHeaderCardStackBackground from './MyHeaderCardStackBackground'

const MyHeaderCardStack: FC = () => {
  return (
    <header className='headerCardStack'>
      <Title sub='Mi' title='Stack' />

      <section className='headerCardStack-card frow border'>
        <div className='flex'>
          <h3>
            Mi stack favorito <b className='emoji'>🌱</b>
          </h3>
          <p className='headerCardStack-card__paragraph'>
            Los uso en proyectos personales, prototipos rápidos y aprendizajes diarios.
          </p>
          <h6>Frontend:</h6>
          <div className='headerCardStack-favoriteTech'>
            {techQuery({ favoriteFor: 'frontend', orderBy: ['category'], orderDirection: 'desc' }).map(tech => {
              const { src, name } = tech
              return (
                <Image
                  key={`${name}-technology`}
                  className='lazy'
                  src={src}
                  width={20}
                  height={20}
                  alt={name}
                  loading='lazy'
                  fetchpriority='low'
                  decoding='async'
                  priority={false}
                />
              )
            })}
          </div>
        </div>

        <MyHeaderCardStackBackground />
      </section>
    </header>
  )
}

export default MyHeaderCardStack
