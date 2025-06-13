import { ThemeBackgroundImages, themeBackgroundImages } from '@/constants'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

type Background = { path: string; style: string }

interface Props {
  background: Background
  setBackgroundKey: (key: ThemeBackgroundImages) => void
}

const DEFAULT_BG_KEY = 'ice' as ThemeBackgroundImages
const DEFAULT_BGS = themeBackgroundImages[DEFAULT_BG_KEY]
const index = Math.floor(Math.random() * DEFAULT_BGS.length)
const DEFAULT_BG = DEFAULT_BGS[index]
const placeholder = blurhashToCssGradientString(DEFAULT_BG.hash)

const state: StateCreator<Props> = set => ({
  background: {
    path: DEFAULT_BG.path,
    style: placeholder
  },
  setBackgroundKey(key) {
    if (!(key in themeBackgroundImages)) return
    const bgs = themeBackgroundImages[key]
    if (bgs.length <= 0) return
    const index = Math.floor(Math.random() * bgs.length)
    return set({ background: { path: bgs[index].path, style: '' } })
  }
})

const useBackgroundImageStore = create(persist(state, { name: 'app-background' }))

export default useBackgroundImageStore
