import { acl } from '@/shared/acl'
import useAppStore, { NOISE_OPTIONS, NoiseOptions } from '@/shared/store/app.store'
import { type FC } from 'react'

const NoiseOptionsComponent: FC = () => {
  const noiseStyle = useAppStore(s => s.noiseStyle)
  const setNoiseStyle = useAppStore(s => s.setNoiseStyle)

  const handleChangeStyle = (select: NoiseOptions) => {
    setNoiseStyle(select)
  }

  return (
    <fieldset className='UPreferences-options' aria-label='Selector de tamaño de fuente'>
      <legend className='sr-only'>Selecciona el estilo del noise de la aplicación</legend>
      {Object.keys(NOISE_OPTIONS).map(style => (
        <button
          key={`${style}-noise`}
          className={`UPreferences-option border ${acl(style === noiseStyle)}`}
          onClick={() => handleChangeStyle(style as NoiseOptions)}
          aria-pressed={style === noiseStyle}
        >
          {style}
        </button>
      ))}
    </fieldset>
  )
}

export default NoiseOptionsComponent
