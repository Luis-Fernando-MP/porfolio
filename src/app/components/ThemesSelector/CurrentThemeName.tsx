import useAppThemeStore from '@/shared/store/appTheme.store'
import type { FC } from 'react'

const CurrentThemeName: FC = () => {
  const styleTheme = useAppThemeStore(s => s.styleTheme)
  const theme = useAppThemeStore(s => s.theme)

  return (
    <div className='paragraph'>
      <h4 className='paragraph-normal capitalize'>{styleTheme} • </h4>
      <h3 className='paragraph-emphasis fne'>{theme}</h3>
    </div>
  )
}

export default CurrentThemeName
