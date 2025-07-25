import useSound from '@/shared/hook/useSound'
import useAppStore from '@/shared/store/app.store'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

const SoundOptionsComponent: FC = () => {
  const soundEnabled = useAppStore(s => s.soundEnabled)
  const setSoundEnabled = useAppStore(s => s.setSoundEnabled)
  const [swOn] = useSound('MENU_OPEN', { forceSoundEnabled: true })

  const handleChange = (enable: boolean) => {
    setSoundEnabled(enable)
    if (enable) swOn()
  }

  return (
    <fieldset className='UPreferences-options' aria-label='Selector de sonidos de la aplicación'>
      <legend className='sr-only'>Activa o desactiva los sonidos de la aplicación</legend>
      {[true, false].map(val => {
        const isActive = val === soundEnabled
        const label = val ? 'Activado' : 'Desactivado'

        return (
          <IconButton
            key={`${val}-sound-enable`}
            active={isActive}
            soundType={isActive ? 'MENU_OPEN' : 'MENU_CLOSE'}
            onClick={() => handleChange(val)}
            aria-pressed={isActive}
            aria-label={`Sonido ${label}`}
            title={`Sonido ${label}`}
          >
            <h5 aria-hidden='true'>{val ? 'On' : 'Off'}</h5>
          </IconButton>
        )
      })}
    </fieldset>
  )
}

export default SoundOptionsComponent
