'use client'

import useAppStore, { FONTSIZE_OPTIONS, FontSizeOptions } from '@/shared/store/app.store'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

const FontSizeComponent: FC = () => {
  const styleFontSize = useAppStore(s => s.fontSize)
  const setFontSize = useAppStore(s => s.setFontSize)

  const handleChangeFontSize = (style: FontSizeOptions, px: number) => {
    setFontSize(style)
    document.documentElement.style.fontSize = `${px}px`
  }

  return (
    <fieldset className='UPreferences-options' aria-labelledby='font-size-title'>
      <legend id='font-size-title' className='sr-only'>
        Selecciona el tamaño de fuente preferido
      </legend>

      {Object.entries(FONTSIZE_OPTIONS).map(([name, value]) => {
        const isActive = name === styleFontSize
        return (
          <IconButton
            key={`${name}-fontSize`}
            active={isActive}
            onClick={() => handleChangeFontSize(name as FontSizeOptions, value)}
            aria-pressed={isActive}
            aria-label={`Cambiar tamaño de fuente a ${name}`}
            title={`Cambiar tamaño de fuente a ${name}`}
          >
            <h5 aria-hidden='true'>{name}</h5>
          </IconButton>
        )
      })}
    </fieldset>
  )
}

export default FontSizeComponent
