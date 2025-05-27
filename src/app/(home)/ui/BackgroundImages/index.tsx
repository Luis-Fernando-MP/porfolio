import { type FC } from 'react'

import { BackgroundImagesWrapper } from './BackgroundImagesWrapper'
import './style.scss'

const BackgroundImages: FC = () => {
  return (
    <section className='backgroundImage'>
      <BackgroundImagesWrapper />
    </section>
  )
}

export default BackgroundImages
