import { techQuery } from '@/lib/techQuery'
import SpotlightCard from '@/shared/components/SpotlightCard'
import Title from '@/shared/ui/Title'
import { Image } from '@unpic/react/nextjs'
import type { FC } from 'react'

import MyHeaderCardStackBackground from './MyHeaderCardStackBackground'

const MyHeaderCardStack: FC = () => {
  return (
    <header className='headerCardStack'>
      <Title sub='Mi' title='Stack' />

      <SpotlightCard className='headerCardStack-card__spot border'>
        <section className='headerCardStack-card frow'>
          <header className='headerCardStack-info'>
            <div className='flex'>
              <h3>
                Mi stack favorito <b className='emoji'>🌱</b>
              </h3>
              <p className='headerCardStack-info__paragraph'>
                Los uso en proyectos personales, prototipos rápidos y aprendizajes diarios.
              </p>
            </div>
            <div className='flex'>
              <h6>Frontend:</h6>
              <div className='headerCardStack-favoriteTechs'>
                {techQuery({ favoriteFor: 'frontend', orderBy: ['Nombre'], orderDirection: 'desc' }).map(tech => {
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
          </header>

          <MyHeaderCardStackBackground />
        </section>
      </SpotlightCard>
    </header>
  )
}

export default MyHeaderCardStack
