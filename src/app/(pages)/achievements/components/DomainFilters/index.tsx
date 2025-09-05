import { skillDomainCategories } from '@/lib/achievementsQuery/achievement.type'
import IconButton from '@/shared/ui/IconButton'

import useAchievementsStore from '../../hooks/useAchievementsStore'

export const DomainFilters = () => {
  const selectedDomains = useAchievementsStore(s => s.selectedDomains)
  const toggleDomain = useAchievementsStore(s => s.toggleDomain)
  return (
    <section className='frow justify-center'>
      {Object.keys(skillDomainCategories).map(cat => (
        <IconButton key={`domain-${cat}`} active={selectedDomains.includes(cat)} onClick={() => toggleDomain(cat)}>
          <h4>{cat}</h4>
        </IconButton>
      ))}
    </section>
  )
}
