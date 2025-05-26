import { THEMES, ThemeKeys } from '@/constants/themes'
import { FC, memo } from 'react'

import CurrentThemeName from './CurrentThemeName'
import ThemeButton from './ThemeButton'
import './style.scss'
import './userMobile.scss'

const renderThemeSection = (style: string) => {
  const { Icon, styles } = THEMES[style as ThemeKeys]
  return (
    <section key={`${style}-theme`} className='themesSelector-style' aria-label={`${style} theme section`}>
      <div className='themesSelector-icon'>
        <Icon aria-hidden='true' />
      </div>
      <div className='themesSelector-list border' role='group'>
        {Object.entries(styles).map(([name, colors]) => (
          <ThemeButton key={`${name}-theme`} style={style} name={name} colors={colors} />
        ))}
      </div>
    </section>
  )
}

const ThemesSelector: FC = memo(() => {
  return (
    <div className='themesSelector' role='region' aria-label='Theme selector'>
      <CurrentThemeName />
      {Object.keys(THEMES).map(renderThemeSection)}
    </div>
  )
})

ThemesSelector.displayName = 'ThemesSelector'

export default ThemesSelector
