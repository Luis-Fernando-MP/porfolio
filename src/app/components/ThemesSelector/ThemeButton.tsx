import { ThemeColorKeys, ThemeColors, ThemeKeys } from '@/constants/themes'
import { PlayOptions } from '@/shared/hook/useSound'
import useAppThemeStore, { ISetThemeProps } from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import IconButton from '@/shared/ui/IconButton'
import { type FC } from 'react'

interface Props {
  themeKey: ThemeKeys
  name: ThemeColorKeys
  colors: ThemeColors
}

const ThemeButton: FC<Props> = ({ themeKey, name, colors }) => {
  const theme = useAppThemeStore(s => s.theme)
  const setAppTheme = useAppThemeStore(s => s.setAppTheme)
  const setBg = useBackgroundImageStore(s => s.setBackgroundKey)

  const handleSetTheme = (props: ISetThemeProps): void => {
    if (theme === props.theme) return
    // if (['light', 'default'].includes(props.style)) playOn()
    setAppTheme(props)
    setBg(props.theme)
  }

  return (
    <IconButton
      transparent
      label={name}
      style={{ backgroundColor: `rgb(${colors['tn-primary']})` }}
      className='themesSelector-theme'
      onClick={() => {
        handleSetTheme({
          style: themeKey,
          theme: name
        })
      }}
    >
      <div style={{ backgroundColor: `rgb(${colors['bg-primary']})` }} />
    </IconButton>
    // <button
    //
    //   style={{ backgroundColor: `rgb(${colors['tn-primary']})` }}
    //   aria-label={`Select ${name} theme`}
    //   title={`${name} theme`}

    // >
    //
    // </button>
  )
}

export default ThemeButton
