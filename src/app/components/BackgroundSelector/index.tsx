'use client'

import useAppThemeStore from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import type { FC } from 'react'

import ThemeBackgroundOption from './ThemeBackgroundOption'
import './style.scss'

const BackgroundSelector: FC = () => {
  const theme = useAppThemeStore(s => s.theme)
  const getThemeBackgrounds = useBackgroundImageStore(s => s.getThemeBackgrounds)
  const images = getThemeBackgrounds(theme)

  return images.length > 0 ? (
    <section className='UPreferences-section'>
      <h5># Background</h5>
      <div className='frow backgroundSelector'>
        {images.map(bg => {
          return <ThemeBackgroundOption key={`${bg.path}-option-image`} {...bg} />
        })}
      </div>
    </section>
  ) : null
}

export default BackgroundSelector
