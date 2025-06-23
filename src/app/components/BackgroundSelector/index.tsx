'use client'

import useAppThemeStore from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import type { FC } from 'react'

import ThemeBackgroundOption from './ThemeBackgroundOption'
import './style.scss'

const BackgroundSelector: FC = () => {
  const theme = useAppThemeStore(s => s.theme)
  const getThemeBackgrounds = useBackgroundImageStore(s => s.getThemeBackgrounds)

  const bgs = getThemeBackgrounds(theme)

  return (
    <div className='frow backgroundSelector'>
      {bgs.map(bg => {
        return <ThemeBackgroundOption key={`${bg.path}-circular-option-theme-image`} {...bg} />
      })}
    </div>
  )
}

export default BackgroundSelector
