import useAppStore, { NOISE_OPTIONS, NoiseOptions } from '@/shared/store/app.store'
import IconButton from '@/shared/ui/IconButton'
import { type FC } from 'react'

const NoiseOptionsComponent: FC = () => {
  const noiseStyle = useAppStore(s => s.noiseStyle)
  const setNoiseStyle = useAppStore(s => s.setNoiseStyle)

  const handleChangeStyle = (select: NoiseOptions) => {
    setNoiseStyle(select)
  }

  return (
    <fieldset className='UPreferences-options' aria-label='Selector de estilo de ruido'>
      <legend className='sr-only'>Selecciona el estilo del noise de la aplicación</legend>
      {Object.keys(NOISE_OPTIONS).map(style => {
        const isActive = style === noiseStyle

        return (
          <IconButton
            key={`${style}-noise`}
            active={isActive}
            onClick={() => handleChangeStyle(style as NoiseOptions)}
            aria-pressed={isActive}
            aria-label={`Seleccionar estilo ${style}`}
            title={`Seleccionar estilo ${style}`}
          >
            <h4 aria-hidden='true'>{style}</h4>
          </IconButton>
        )
      })}
    </fieldset>
  )
}

export default NoiseOptionsComponent
