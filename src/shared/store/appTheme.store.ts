import { DEFAULT_THEME, THEMES, ThemeColorKeys, ThemeColors, ThemeKeys } from '@/constants/themes'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ISetThemeProps {
  style: ThemeKeys
  theme: ThemeColorKeys
}

interface IAppThemeStore {
  styleTheme: ThemeKeys
  theme: ThemeColorKeys

  setAppTheme: (_: ISetThemeProps) => void
  resetTheme: () => void
  currentTheme: () => { style: ThemeKeys; theme: ThemeColorKeys; colors: ThemeColors }
}

const state: StateCreator<IAppThemeStore> = (set, get) => ({
  styleTheme: DEFAULT_THEME.style,
  theme: DEFAULT_THEME.theme,

  setAppTheme: config => set({ styleTheme: config.style, theme: config.theme }),

  resetTheme: () => set({ styleTheme: DEFAULT_THEME.style, theme: DEFAULT_THEME.theme }),

  currentTheme: () => {
    const { styleTheme, theme } = get()
    const themeStyles = THEMES[styleTheme]?.styles
    const colors = (themeStyles as any)?.[theme]

    return {
      style: styleTheme,
      theme,
      colors: colors ?? DEFAULT_THEME.colors
    }
  }
})

const useAppThemeStore = create(persist(state, { name: 'app-theme' }))

export default useAppThemeStore
