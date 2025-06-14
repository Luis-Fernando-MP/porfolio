import { AUDIOS } from '@/constants/audio'
import { ThemeColorKeys, ThemeKeys } from '@/constants/themes'
import useAppThemeStore, { ISetThemeProps } from '@/shared/store/appTheme.store'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { type FC } from 'react'
import useSound from 'use-sound'

interface Props {
  style: string
  name: string
  colors: Record<string, string>
}

const ThemeButton: FC<Props> = ({ style, name, colors }) => {
  const theme = useAppThemeStore(s => s.theme)
  const setAppTheme = useAppThemeStore(s => s.setAppTheme)
  const setBg = useBackgroundImageStore(s => s.setBackgroundKey)
  const [switchOnPlay] = useSound(AUDIOS.SWITCH_ON.path)
  const [switchOffPlay] = useSound(AUDIOS.SWITCH_OFF.path)

  const handleSetTheme = (props: ISetThemeProps): void => {
    if (theme === props.theme) return
    if (['light', 'default'].includes(props.style)) switchOnPlay()
    else switchOffPlay()
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
