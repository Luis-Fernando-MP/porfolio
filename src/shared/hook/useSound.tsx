import { AUDIOS } from '@/constants/audio'
import { Howl } from 'howler'

import useAppStore from '../store/app.store'

type SpriteMap = { [key: string]: [number, number] }

type HookOptions = {
  id?: string
  volume?: number
  playbackRate?: number
  interrupt?: boolean
  soundEnabled?: boolean
  sprite?: SpriteMap
  onload?: () => void
}

export interface PlayOptions {
  id?: string
  forceSoundEnabled?: boolean
  playbackRate?: number
}

export interface ExposedData {
  sound: Howl | null
  stop: (id?: number) => void
  pause: (id?: number) => void
  duration: number | null
}

const soundCache: Record<string, Howl> = {}

const useSound = (audio: keyof typeof AUDIOS, options: HookOptions = {}): [(options?: PlayOptions) => void, ExposedData] => {
  const soundEnabled = useAppStore(s => s.soundEnabled)
  const src = AUDIOS[audio]?.path

  const sound = (() => {
    if (!soundCache[src]) {
      soundCache[src] = new Howl({
        src: [src],
        ...options
      })
    }
    return soundCache[src]
  })()

  const play = (opts?: PlayOptions) => {
    if (!soundEnabled && !opts?.forceSoundEnabled) return
    const id = sound.play(opts?.id)
    if (opts?.playbackRate) sound.rate(opts.playbackRate, id)
  }

  return [
    play,
    {
      sound,
      stop: (id?: number) => sound.stop(id),
      pause: (id?: number) => sound.pause(id),
      duration: sound.duration()
    }
  ]
}

export default useSound
