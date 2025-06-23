import { ThemeColorKeys, ThemeKeys } from '@/constants/themes'
import { PlayOptions } from '@/shared/hook/useSound'
import useAppThemeStore, { ISetThemeProps } from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { type FC } from 'react'

interface Props {
  style: string
  name: string
  colors: Record<string, string>
  playOn: (options?: PlayOptions) => void
  playOff: (options?: PlayOptions) => void
}

const ThemeButton: FC<Props> = ({ style, name, colors, playOff, playOn }) => {
  const theme = useAppThemeStore(s => s.theme)
  const setAppTheme = useAppThemeStore(s => s.setAppTheme)
  const setBg = useBackgroundImageStore(s => s.setBackgroundKey)

  const handleSetTheme = (props: ISetThemeProps): void => {
    if (theme === props.theme) return
    if (['light', 'default'].includes(props.style)) playOn()
    else playOff()
    setAppTheme(props)
    setBg(props.theme)
  }

  return (
    <button
      className='themesSelector-theme'
      style={{ backgroundColor: `rgb(${colors['tn-primary']})` }}
      aria-label={`Select ${name} theme`}
      title={`${name} theme`}
      onClick={() => {
        handleSetTheme({
          style: style as ThemeKeys,
          theme: name as ThemeColorKeys
        })
      }}
    >
      <div style={{ backgroundColor: `rgb(${colors['bg-primary']})` }} />
    </button>
  )
}

export default ThemeButton
