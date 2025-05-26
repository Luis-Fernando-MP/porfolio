import { AUDIOS } from '@/constants/audio'
import sound from 'use-sound'
import { useSound as useSoundLib } from 'use-sound'

import useAppStore from '../store/app.store'

type SpriteMap = {
  [key: string]: [number, number]
}
type HookOptions<T = any> = T & {
  id?: string
  volume?: number
  playbackRate?: number
  interrupt?: boolean
  soundEnabled?: boolean
  sprite?: SpriteMap
  onload?: () => void
}
interface PlayOptions {
  id?: string
  forceSoundEnabled?: boolean
  playbackRate?: number
}
export interface ExposedData {
  sound: Howl | null
  stop: (id?: string) => void
  pause: (id?: string) => void
  duration: number | null
}

const useSound = (audio: keyof typeof AUDIOS, { options }: HookOptions = {}): [(options?: PlayOptions) => void, ExposedData] => {
  const soundEnabled = useAppStore(s => s.soundEnabled)
  const [play, expose] = useSoundLib(AUDIOS[audio].path, options)

  function handlePlay(options?: PlayOptions) {
    if (soundEnabled) play(options)
  }

  return [handlePlay, expose]
}

export default useSound
