import type { FC } from 'react'

import './style.scss'

interface Props {
  children: string
}

const ShadowText: FC<Props> = ({ children }) => {
  return <h3 className='shadowText'>{children}</h3>
}

export default ShadowText
