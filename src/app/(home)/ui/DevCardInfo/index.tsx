import { INFO } from '@/constants'
import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import Link from 'next/link'
import type { FC } from 'react'

import { BackgroundImagesWrapper } from '../BackgroundImages/BackgroundImagesWrapper'
import './style.scss'

const DevCardInfo: FC = () => {
  return (
    <div className='devCard'>
      <BackgroundImagesWrapper height={115} className='devCard-background' />
      <div className='devCard-wrapper'>
        <Link href={INFO.github} target='_blank' rel='noopener noreferrer'>
          <h1 className='devCard-name'>#{INFO.devShortName}</h1>
        </Link>

        <div className='devCard-status'>
          <HauiDevLogo />
          <h2>{INFO.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default DevCardInfo
