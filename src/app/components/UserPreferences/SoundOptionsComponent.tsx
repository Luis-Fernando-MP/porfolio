import { AUDIOS } from '@/constants/audio'
import { acl } from '@/shared/acl'
import useAppStore from '@/shared/store/app.store'
import type { FC } from 'react'
import useSound from 'use-sound'

const SoundOptionsComponent: FC = () => {
  const soundEnabled = useAppStore(s => s.soundEnabled)
  const setSoundEnabled = useAppStore(s => s.setSoundEnabled)

  const [swOn] = useSound(AUDIOS.SWITCH_ON.path)
  const [swOff] = useSound(AUDIOS.SWITCH_OFF.path)

  const handleChange = (enable: boolean) => {
    if (soundEnabled === enable) return
    setSoundEnabled(enable)
    if (enable) swOn()
    else swOff()
  }

  return (
    <fieldset className='UPreferences-options' aria-label='Activa/desactiva los sonidos de la aplicación'>
      <legend className='sr-only'>Activa/desactiva los sonidos de la aplicación</legend>
      {[true, false].map(val => (
        <button
          key={`${val}-sound-enable`}
          className={`UPreferences-option border ${acl(val === soundEnabled)}`}
          onClick={() => handleChange(val)}
          aria-pressed={val === soundEnabled}
        >
          {val ? 'On' : 'Off'}
        </button>
      ))}
    </fieldset>
  )
}

export default SoundOptionsComponent
