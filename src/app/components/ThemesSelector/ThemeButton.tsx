import { ThemeColorKeys, ThemeColors, ThemeKeys } from '@/constants/themes'
import useAppThemeStore, { ISetThemeProps } from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import IconButton from '@/shared/ui/IconButton'
import { type FC, memo } from 'react'

interface Props {
  themeKey: ThemeKeys
  name: ThemeColorKeys
  colors: ThemeColors
}

const ThemeButton: FC<Props> = ({ themeKey, name, colors }) => {
  const setAppTheme = useAppThemeStore(s => s.setAppTheme)
  const setBg = useBackgroundImageStore(s => s.setBackgroundKey)

  const handleSetTheme = (props: ISetThemeProps): void => {
    setAppTheme(props)
    setBg(props.theme)
  }

  return (
    <IconButton
      transparent
      noPadding
      aria-label={`Select ${name} theme`}
      label={name}
      style={{ backgroundColor: `rgb(${colors['tn-primary']})` }}
      className='themesSelector-theme'
      contentClass='themesSelector-theme__content'
      onClick={() => {
        handleSetTheme({
          style: themeKey,
          theme: name
        })
      }}
    >
      <h5 className='sr-only'>{`Apply ${name} theme`}</h5>
      <div
        className='themesSelector-theme__point'
        style={{ backgroundColor: `rgb(${colors['bg-primary']})` }}
        aria-hidden='true'
      />
    </IconButton>
  )
}

export default memo(ThemeButton)
