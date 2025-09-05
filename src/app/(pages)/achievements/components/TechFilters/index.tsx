'use client'

import { achievementsTechUsage } from '@/constants/achievements'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import { BotIcon } from 'lucide-react'
import { useState } from 'react'

import useAchievementsStore from '../../hooks/useAchievementsStore'
import './index.scss'

export const TechFilters = () => {
  const [showTechFilters, setShowTechFilters] = useState(false)
  const toggleTech = useAchievementsStore(s => s.toggleTech)
  const selectedTechs = useAchievementsStore(s => s.selectedTechs)

  const toggleShowTechFilters = () => {
    setShowTechFilters(!showTechFilters)
  }

  return (
    <section className='frow achievementsTech'>
      <IconButton onClick={toggleShowTechFilters}>
        <h4>Por Tecnologías</h4>
        <BotIcon />
      </IconButton>

      {showTechFilters && (
        <div className='achievementsTech-list frow fade border'>
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
