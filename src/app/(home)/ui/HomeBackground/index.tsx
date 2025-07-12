import { type FC } from 'react'

import { BackgroundImage } from '../backgroundImage'
import './style.scss'
import './userMobile.scss'

const HomeBackground: FC = () => {
  return (
    <section className='homeBackground'>
      <BackgroundImage className='homeBackground-wrapper' height={530} style={{ filter: 'brightness(0.8)' }} />
    </section>
  )
}

export default HomeBackground
