import { BackgroundImage, DEFAULT_THEME, ThemeColorKeys, themeBackgroundImages } from '@/constants/themes'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Props {
  background: BackgroundImage
  setBackground: (key: BackgroundImage) => void
  setBackgroundKey: (key: ThemeColorKeys) => void
  getThemeBackgrounds: (key: ThemeColorKeys) => BackgroundImage[]
}

const placeholder = blurhashToCssGradientString(DEFAULT_THEME.bg?.hash)

const state: StateCreator<Props> = set => ({
  background: {
    path: DEFAULT_THEME.bg.path,
    hash: placeholder
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
    const placeholder = blurhashToCssGradientString(bgs[0].hash)
    return set({ background: { path: bgs[0].path, hash: placeholder } })
  }
})

const useBackgroundImageStore = create(persist(state, { name: 'app-background' }))

export default useBackgroundImageStore
