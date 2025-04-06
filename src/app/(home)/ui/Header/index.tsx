import ShadowText from '@/shared/ui/ShadowText'
import type { FC } from 'react'

import DescriptionHeader from '../DescriptionHeader'
import FocusGradient from './FocusGradient'
import HeaderTitle from './HeaderTitle'
import './style.scss'
import './userMobile.scss'

const Header: FC = () => {
  return (
    <article className='header'>
      <ShadowText>LUIS FERNANDO DEVELOPER</ShadowText>
      {/* <FocusGradient /> */}

      <div className='home-wrapper header-wrapper'>
        <DescriptionHeader />
        <HeaderTitle />
      </div>
    </article>
  )
}

export default Header
