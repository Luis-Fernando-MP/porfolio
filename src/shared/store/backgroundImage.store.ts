import { BackgroundImage, DEFAULT_THEME, ThemeColorKeys, themeBackgroundImages } from '@/constants/themes'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Props {
  background: BackgroundImage
  setBackground: (key: BackgroundImage) => void
  setBackgroundKey: (key: ThemeColorKeys) => void
  getThemeBackgrounds: (key: ThemeColorKeys) => BackgroundImage[]
}

const state: StateCreator<Props> = set => ({
  background: {
    path: DEFAULT_THEME.bg.path,
    isLottie: DEFAULT_THEME.bg.isLottie ?? false
  },
  getThemeBackgrounds(key: ThemeColorKeys) {
    if (!(key in themeBackgroundImages)) return []
    const bgs = themeBackgroundImages[key]
    return bgs
  },
  setBackground(newBg: BackgroundImage) {
    set({
      background: newBg
    })
  },
  setBackgroundKey(key) {
    if (!(key in themeBackgroundImages)) return
    const bgs = themeBackgroundImages[key]
    if (bgs.length <= 0) return

    const { path, isLottie } = bgs[0]

    return set({ background: { path, isLottie: isLottie ?? false } })
  }
})

const useBackgroundImageStore = create(persist(state, { name: 'app-background' }))

export default useBackgroundImageStore
