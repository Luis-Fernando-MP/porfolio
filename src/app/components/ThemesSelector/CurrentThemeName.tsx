import useAppThemeStore from '@/shared/store/appTheme.store'
import type { FC } from 'react'

const CurrentThemeName: FC = () => {
  const dominantKey = useAppThemeStore(s => s.dominantKey)
  const theme = useAppThemeStore(s => s.theme)

  return (
    <div className='paragraph'>
      <h4 className='paragraph-normal capitalize'>{dominantKey} • </h4>
      <h3 className='paragraph-emphasis fne capitalize'>{theme}</h3>
    </div>
  )
}

export default CurrentThemeName
