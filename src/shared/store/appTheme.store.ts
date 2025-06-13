import { DEFAULT_THEME, DominantKey, THEMES, Theme, ThemeColorKeys, ThemeKeys } from '@/constants/themes'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ISetThemeProps {
  style: ThemeKeys
  theme: ThemeColorKeys
  dominantKey: DominantKey
}

interface IAppThemeStore {
  styleTheme: ThemeKeys
  theme: ThemeColorKeys
  dominantKey: DominantKey

  setAppTheme: (_: ISetThemeProps) => void
  resetTheme: () => void
  currentTheme: () => { style: ThemeKeys; theme: ThemeColorKeys; colors: Theme }
}

const state: StateCreator<IAppThemeStore> = (set, get) => ({
  styleTheme: DEFAULT_THEME.style,
  theme: DEFAULT_THEME.theme,
  dominantKey: DEFAULT_THEME.dominantKey,
  setAppTheme: config => {
    set({ styleTheme: config.style, theme: config.theme, dominantKey: config.dominantKey })
  },
  resetTheme: () => {
    set({ styleTheme: DEFAULT_THEME.style, theme: DEFAULT_THEME.theme })
  },
  currentTheme: () => {
    const { styleTheme, theme } = get()
    const colors = (THEMES[styleTheme]?.styles as any)[theme]
    const defaultColors = (THEMES[DEFAULT_THEME.style].styles as any)[DEFAULT_THEME.theme]
    return { style: styleTheme, theme, colors: colors ?? defaultColors }
  }
})

const useAppThemeStore = create(persist(state, { name: 'app-theme' }))

export default useAppThemeStore
