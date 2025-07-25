'use client'

import { AUDIOS, type Audio } from '@/constants/audio'
import { Howl } from 'howler'

import useAppStore from '../store/app.store'

type SpriteMap = { [key: string]: [number, number] }

type HookOptions = {
  id?: string
  volume?: number
  playbackRate?: number
  interrupt?: boolean
  soundEnabled?: boolean
  forceSoundEnabled?: boolean
  sprite?: SpriteMap
  onload?: () => void
}

export interface PlayOptions {
  id?: string
  playbackRate?: number
}

export interface ExposedData {
  sound: Howl | null
  stop: (id?: number) => void
  pause: (id?: number) => void
  duration: number | null
}

// Cache shared across hook instances
const soundCache: Record<string, Howl | undefined> = {}

function initializeSound(src: string, options: HookOptions, preload: boolean) {
  soundCache[src] = undefined

  const load = () => {
    const instance = new Howl({
      src: [src],
      volume: options.volume ?? 1,
      rate: options.playbackRate ?? 1,
      sprite: options.sprite,
      onload: options.onload
    })

    instance.once('load', () => {
      // warming cache
    })

    soundCache[src] = instance
  }

  preload ? load() : setTimeout(load, 3000)
}

/**
 * Custom hook to manage and play audio effects with Howler.js.
 * It caches sounds and respects global and local sound-enabled flags.
 *
 * @param {Audio} audio - Key of the audio resource from AUDIOS map.
 * @param {HookOptions} [options] - Optional config for volume, rate, etc.
 * @returns {[Function, ExposedData]} - A tuple: [playFn, soundControlHelpers]
 *
 * @example
 * const [play, { stop }] = useSound('MENU_CLOSE', { volume: 0.5 })
 * play()
 */
const useSound = (audio: Audio, options: HookOptions = {}): [(options?: PlayOptions) => void, ExposedData] => {
  const globalSoundEnabled = useAppStore(s => s.soundEnabled)
  const src = AUDIOS[audio]?.path

  if (!src) {
    return [
      () => {},
      {
        sound: null,
        stop: () => {},
        pause: () => {},
        duration: null
      }
    ]
  }

  const shouldPreload = options.forceSoundEnabled || options.soundEnabled || globalSoundEnabled

  if (!(src in soundCache)) {
    initializeSound(src, options, shouldPreload)
  }

  const sound = soundCache[src] || null

  const play = (opts?: PlayOptions) => {
    const isEnabled = options.forceSoundEnabled || options.soundEnabled || globalSoundEnabled

    if (!isEnabled || !sound) return

    const id = sound.play(opts?.id)
    if (opts?.playbackRate) sound.rate(opts.playbackRate, id)
  }

  return [
    play,
    {
      sound,
      stop: (id?: number) => sound?.stop(id),
      pause: (id?: number) => sound?.pause(id),
      duration: sound?.duration() ?? null
    }
  ]
}

export default useSound
