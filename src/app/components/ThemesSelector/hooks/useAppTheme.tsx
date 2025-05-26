'use client'

import { useEffect } from 'react'

import useAppThemeStore from './appTheme.store'

const useAppTheme = () => {
  const theme = useAppThemeStore(s => s.theme)
  const currentTheme = useAppThemeStore(s => s.currentTheme)

  useEffect(() => {
    const root = document.documentElement
    const { colors, theme: curTheme } = currentTheme()
    root.setAttribute('data-theme', curTheme)
    Object.entries(colors).forEach(([name, color]) => {
      root.style.setProperty(`--${name}`, `${color}`)
    })
  }, [theme])

  return { theme }
}

export default useAppTheme
