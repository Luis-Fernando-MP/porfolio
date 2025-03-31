'use client'

import { THEMES, ThemeKeys } from '@/shared/components/ThemeController/themes'
import { useLayoutEffect } from 'react'

import useAppThemeStore, { DEFAULT_THEME } from './appTheme.store'

const useAppTheme = () => {
  const { appTheme, setAppTheme } = useAppThemeStore()

  useLayoutEffect(() => {
    const root = document.documentElement
    let currentTheme = THEMES[appTheme]
    if (!currentTheme) currentTheme = THEMES[DEFAULT_THEME]

    const { type, ...theme } = currentTheme

    root.setAttribute('data-theme', type)

    Object.entries(theme).forEach(([key, color]) => {
      root.style.setProperty(`--${key}`, `${color}`)
    })
  }, [appTheme])

  const handleSetTheme = (selectTheme: string): void => {
    if (appTheme === selectTheme) {
      return
    }
    setAppTheme(selectTheme as ThemeKeys)
  }

  return { appTheme, handleSetTheme, THEMES }
}

export default useAppTheme
