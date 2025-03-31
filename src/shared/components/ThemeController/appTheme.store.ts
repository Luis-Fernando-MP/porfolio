import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ThemeKeys } from './themes'

export const DEFAULT_THEME: ThemeKeys = 'Shumi dev'

interface IAppThemeStore {
  appTheme: ThemeKeys
  setAppTheme: (appTheme: ThemeKeys) => void
  resetTheme: () => void
}

const state: StateCreator<IAppThemeStore> = set => ({
  appTheme: DEFAULT_THEME,
  setAppTheme: appTheme => set({ appTheme }),
  resetTheme: () => set({ appTheme: DEFAULT_THEME })
})

const useAppThemeStore = create(persist(state, { name: 'app-theme' }))

export default useAppThemeStore
