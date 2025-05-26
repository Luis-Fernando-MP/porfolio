'use client'

import useAppThemeStore from '@/shared/store/appTheme.store'
import { useLayoutEffect } from 'react'

import useAppStore from '../store/app.store'

const useLoadStore = () => {
  const theme = useAppThemeStore(s => s.theme)
  const currentTheme = useAppThemeStore(s => s.currentTheme)
  const fontSize = useAppStore(s => s.currentFontSize)

  useLayoutEffect(() => {
    const root = document.documentElement
    const { colors, theme: curTheme } = currentTheme()
    root.setAttribute('data-theme', curTheme)
    Object.entries(colors).forEach(([name, color]) => {
      root.style.setProperty(`--${name}`, `${color}`)
    })
  }, [theme])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.style.fontSize = `${fontSize()}px`
    console.log('font', `${fontSize()}px`)
  }, [])

  return { theme }
}

export default useLoadStore
