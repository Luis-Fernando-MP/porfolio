import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  sub: string
  title: string
  reverse?: boolean
}

const Title: FC<Props> = ({ sub, title, reverse }) => {
  return (
    <div className='title' style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <h2>{sub}</h2>
      <h2 className='font2'>{title}</h2>
    </div>
  )
}

export default Title
