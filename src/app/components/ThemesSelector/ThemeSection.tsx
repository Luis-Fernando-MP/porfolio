import { ThemeKeys, ThemeParent } from '@/constants/themes'
import { FC } from 'react'

import ThemeButton from './ThemeButton'

interface Props {
  themeKey: ThemeKeys
  theme: ThemeParent
}

const ThemeSection: FC<Props> = ({ theme, themeKey }) => {
  const { Icon, styles } = theme

  return (
    <section key={`${themeKey}-theme`} className='themesSelector-style' aria-labelledby={`${themeKey}-section-heading`}>
      <header>
        <Icon aria-hidden='true' />
        <h4 id={`${themeKey}-section-heading`} className='sr-only'>
          Theme options for {themeKey}
        </h4>
      </header>

      <div className='themesSelector-list' role='group' aria-label={`Color themes for ${themeKey}`}>
        {Object.entries(styles).map(([name, colors]: any) => (
          <ThemeButton key={`${name}-theme`} themeKey={themeKey} name={name} colors={colors} />
        ))}
      </div>
    </section>
  )
}

export default ThemeSection
