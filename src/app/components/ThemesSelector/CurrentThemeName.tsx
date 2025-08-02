import useAppThemeStore from '@/shared/store/appTheme.store'
import type { FC } from 'react'

const CurrentThemeName: FC = () => {
  const style = useAppThemeStore(s => s.styleTheme)
  const theme = useAppThemeStore(s => s.theme)

  return (
    <div className='frow'>
      <h6 className='capitalize'>{style}</h6>
      <h6>•</h6>
      <h5 className='capitalize'>{theme}</h5>
    </div>
  )
}

export default CurrentThemeName
