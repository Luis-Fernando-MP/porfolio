import useAppThemeStore from '@/shared/store/appTheme.store'
import type { FC } from 'react'

const CurrentThemeName: FC = () => {
  const style = useAppThemeStore(s => s.styleTheme)
  const theme = useAppThemeStore(s => s.theme)

  return (
    <div className='frow'>
      <h5 className='capitalize'>{style}</h5>
      <h5>•</h5>
      <h4>{theme.toUpperCase()}</h4>
    </div>
  )
}

export default CurrentThemeName
