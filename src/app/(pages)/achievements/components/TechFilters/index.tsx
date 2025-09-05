import { achievementsTechUsage } from '@/constants/achievements'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'

import useAchievementsStore from '../../hooks/useAchievementsStore'

export const TechFilters = () => {
  const { selectedTechs, showTechFilters, toggleTech, toggleShowTechFilters } = useAchievementsStore()
  return (
    <section className='frow flex-wrap gap-2'>
      <h6 className='text-lg font-semibold'>Tecnologías:</h6>
      <IconButton onClick={toggleShowTechFilters}>
        <h4>{showTechFilters ? 'Ocultar' : 'Mostrar'}</h4>
      </IconButton>
      {showTechFilters && (
        <div className='ml-4 flex flex-wrap gap-2'>
          {Object.entries(achievementsTechUsage).map(([name, props]) => (
            <IconButton key={`tech-${name}`} active={selectedTechs.includes(name)} onClick={() => toggleTech(name)}>
              <Image src={props.src} width={20} height={20} alt={name} />
              <h4>{name}</h4>
              <h5 className='text-xs text-gray-500'>({props.quantity})</h5>
            </IconButton>
          ))}
        </div>
      )}
    </section>
  )
}
