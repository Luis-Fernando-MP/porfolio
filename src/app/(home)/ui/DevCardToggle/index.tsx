'use client'

import { INFO } from '@/constants'
import useDevCardStore from '@/shared/store/devCard.store'
import IconButton from '@/shared/ui/IconButton'
import { SparklesIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const DevCardToggle: FC = () => {
  const { isShowing, setIsShowing } = useDevCardStore()

  const handleClick = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className='devCardToggle'>
      <IconButton transparent onClick={handleClick}>
        <SparklesIcon />
        <h4 className='devCardToggle-name'>{INFO.devShortName}</h4>
      </IconButton>
    </div>
  )
}

export default DevCardToggle
