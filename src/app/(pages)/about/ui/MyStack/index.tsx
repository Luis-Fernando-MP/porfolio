import { type FC } from 'react'

import Technologies from '../../components/Technologies'
import MyHeaderCardStack from './MyHeaderCardStack'
import './style.scss'
import './userMobile.scss'

const MyStack: FC = () => {
  return (
    <article className='devStack'>
      <MyHeaderCardStack />
      <Technologies />
    </article>
  )
}

export default MyStack
