import { ThemeColorKeys, ThemeKeys } from '@/constants/themes'
import { type FC } from 'react'

import useAppThemeStore, { ISetThemeProps } from './hooks/appTheme.store'

interface Props {
  style: string
  name: string
  colors: Record<string, string>
}

const ThemeButton: FC<Props> = ({ style, name, colors }) => {
  const setAppTheme = useAppThemeStore(s => s.setAppTheme)

  const handleSetTheme = (props: ISetThemeProps): void => {
    setAppTheme(props)
  }

  return (
    <button
      className='themesSelector-theme'
      style={{ backgroundColor: `rgb(${colors['tn-primary']})` }}
      aria-label={`Select ${name} theme`}
      title={`${name} theme`}
      onClick={() => {
        handleSetTheme({ style: style as ThemeKeys, theme: name as ThemeColorKeys })
      }}
    />
  )
}

export default ThemeButton
