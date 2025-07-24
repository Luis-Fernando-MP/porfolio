import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

export const NOISE_OPTIONS = {
  Off: 0,
  Bajo: 1,
  Medio: 2,
  Alto: 3
}

export const FONTSIZE_OPTIONS = {
  Peque: 14,
  Normal: 16,
  Grande: 18,
  x2: 20
}

export type FontSizeOptions = keyof typeof FONTSIZE_OPTIONS
export type NoiseOptions = keyof typeof NOISE_OPTIONS
interface Props {
  noiseStyle: NoiseOptions
  fontSize: FontSizeOptions
  soundEnabled: boolean
  setNoiseStyle: (noiseStyle: NoiseOptions) => void
  setFontSize: (fontSize: FontSizeOptions) => void
  setSoundEnabled: (enabled: boolean) => void

  currentFontSize: () => number
}

const state: StateCreator<Props> = (set, get) => ({
  noiseStyle: 'Off',
  fontSize: 'Normal',
  soundEnabled: true,
  setSoundEnabled: (enabled: boolean) => {
    set({ soundEnabled: enabled })
  },
  setFontSize: (fontSize: FontSizeOptions) => {
    set({ fontSize })
  },
  setNoiseStyle: (noiseStyle: NoiseOptions) => {
    set({ noiseStyle })
  },
  currentFontSize: () => {
    const { fontSize } = get()
    return FONTSIZE_OPTIONS[fontSize]
  }
})

const useAppStore = create(persist(state, { name: 'app-config-store' }))

export default useAppStore
