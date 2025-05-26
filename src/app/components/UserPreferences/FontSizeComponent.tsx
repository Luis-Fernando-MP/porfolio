'use client'

import { acl } from '@/shared/acl'
import useAppStore, { FONTSIZE_OPTIONS, FontSizeOptions } from '@/shared/store/app.store'
import type { FC } from 'react'

const FontSizeComponent: FC = () => {
  const styleFontSize = useAppStore(s => s.fontSize)
  const setFontSize = useAppStore(s => s.setFontSize)

  const handleChangeFontSize = (style: FontSizeOptions, px: number) => {
    setFontSize(style)
    document.documentElement.style.fontSize = `${px}px`
  }

  return (
    <fieldset className='UPreferences-options' aria-label='Selector de tamaño de fuente'>
      <legend className='sr-only'>Selecciona el tamaño de fuente preferido</legend>
      {Object.entries(FONTSIZE_OPTIONS).map(([name, value]) => (
        <button
          key={`${name}-fontSize`}
          className={`UPreferences-option border ${acl(name === styleFontSize)}`}
          onClick={() => handleChangeFontSize(name as FontSizeOptions, value)}
          aria-pressed={name === styleFontSize}
        >
          {name}
        </button>
      ))}
    </fieldset>
  )
}

export default FontSizeComponent
