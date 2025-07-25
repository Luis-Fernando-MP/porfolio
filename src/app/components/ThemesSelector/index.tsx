import { THEMES } from '@/constants/themes'
import { FC, memo } from 'react'

import CurrentThemeName from './CurrentThemeName'
import ThemeSection from './ThemeSection'
import './style.scss'
import './userMobile.scss'

const ThemesSelector: FC = memo(() => {
  return (
    <div className='themesSelector' role='region' aria-label='Theme selector'>
      <CurrentThemeName />
      {Object.entries(THEMES).map(([key, theme]: any) => {
        return <ThemeSection key={`${key}-themes`} themeKey={key} theme={theme} />
      })}
    </div>
  )
})

export default ThemesSelector
