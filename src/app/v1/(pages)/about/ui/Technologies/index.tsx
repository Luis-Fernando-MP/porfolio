import { Image } from '@unpic/react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  sectionMame: string
  languages: {
    name: string
    src: string
    state: string
    color: string
  }[]
}

const Technologies: FC<Props> = ({ languages, sectionMame }) => {
  return (
    <section className='technologies'>
      <h2 className='technologies-title'>{sectionMame}</h2>
      <ul className='technologies-list'>
        {languages.map(lang => {
          const { src, name } = lang
          return (
            <li className='technologies-language border' key={name}>
              <Image src={src} width={17} height={17} alt={name} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Technologies
