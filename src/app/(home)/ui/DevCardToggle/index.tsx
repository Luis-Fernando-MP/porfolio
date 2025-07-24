'use client'

import { INFO } from '@/constants'
import useDevCardStore from '@/shared/store/devCard.store'
import IconButton from '@/shared/ui/IconButton'
import { UserCircle2Icon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const DevCardToggle: FC = () => {
  const { isShowing, setIsShowing } = useDevCardStore()

  const handleClick = () => {
    setIsShowing(!isShowing)
  }
  return (
    <IconButton className='devCardToggle border' onClick={handleClick}>
      <UserCircle2Icon />
      <h4 className='devCardToggle-name'>#{INFO.devShortName}</h4>
    </IconButton>
  )
}

export default DevCardToggle
