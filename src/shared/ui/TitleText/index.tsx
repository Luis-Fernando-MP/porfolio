import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  sub: string
  title: string
}

const TitleText: FC<Props> = ({ sub, title }) => {
  return (
    <div className='titleText'>
      <h3 className='titleText-sub'>{sub}</h3>
      <h2 className='titleText-title'>{title}</h2>
    </div>
  )
}

export default TitleText
