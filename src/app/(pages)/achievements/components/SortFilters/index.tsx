import IconButton from '@/shared/ui/IconButton'
import { BoxesIcon, SortAscIcon, SortDescIcon, SparkleIcon, SparklesIcon, TextIcon } from 'lucide-react'

import useAchievementsStore from '../../hooks/useAchievementsStore'

export const SortFilters = () => {
  const orderBy = useAchievementsStore(s => s.orderBy)
  const toggleOrder = useAchievementsStore(s => s.toggleOrder)

  return (
    <section className='frow justify-center'>
      <h6>Ordenar por:</h6>
      <IconButton active={orderBy.includes('Contribución')} onClick={() => toggleOrder('Contribución')}>
        <h4>Contribución</h4>
        {orderBy.includes('Contribución') ? <SparklesIcon /> : <SparkleIcon />}
      </IconButton>

      <IconButton active={orderBy.includes('Fecha')} onClick={() => toggleOrder('Fecha')}>
        <h4>{orderBy.includes('Fecha') ? 'Recientes' : 'Antiguos'}</h4>
        {orderBy.includes('Fecha') ? <SortAscIcon /> : <SortDescIcon />}
      </IconButton>

      <IconButton active={orderBy.includes('Skill')} onClick={() => toggleOrder('Skill')}>
        <h4>Skill</h4>
        <BoxesIcon />
      </IconButton>

      <IconButton active={orderBy.includes('Nombre')} onClick={() => toggleOrder('Nombre')}>
        <h4>Nombre</h4>
        <TextIcon />
      </IconButton>
    </section>
  )
}
