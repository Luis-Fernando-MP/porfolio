import { achievementIcons } from '@/lib/achievementsQuery/achievement.type'
import IconButton from '@/shared/ui/IconButton'

import useAchievementsStore from '../../hooks/useAchievementsStore'

export const TypeFilters = () => {
  const toggleType = useAchievementsStore(s => s.toggleType)
  const resetTypes = useAchievementsStore(s => s.resetTypes)
  const selectedTypes = useAchievementsStore(s => s.selectedTypes)

  return (
    <section className='frow justify-center'>
      <IconButton active={selectedTypes.length === 0} onClick={resetTypes}>
        <h4>Todos</h4>
      </IconButton>
      {Object.entries(achievementIcons).map(([name, Icon]) => (
        <IconButton key={`type-${name}`} active={selectedTypes.includes(name)} onClick={() => toggleType(name)}>
          <Icon />
          <h4>{name}</h4>
        </IconButton>
      ))}
    </section>
  )
}
