import { themeBackgroundImages } from '@/constants'
import { ThemeColorKeys } from '@/constants/themes'
import { blurhashToCssGradientString } from '@unpic/placeholder'
import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

type Background = { path: string; style: string }

interface Props {
  background: Background
  setBackgroundKey: (key: ThemeColorKeys) => void
}

const DEFAULT_BG_KEY: ThemeColorKeys = 'dev dark'
const DEFAULT_BGS = themeBackgroundImages[DEFAULT_BG_KEY]
const index = Math.floor(Math.random() * DEFAULT_BGS.length)
const DEFAULT_BG = DEFAULT_BGS[index] ?? { path: '/assets/backgrounds/ice1.webp', hash: 'L4F5gBK$00EL.jot^*_M00%2-;Ns' }
const placeholder = blurhashToCssGradientString(DEFAULT_BG?.hash)

const state: StateCreator<Props> = set => ({
  background: {
    path: DEFAULT_BG?.path,
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
