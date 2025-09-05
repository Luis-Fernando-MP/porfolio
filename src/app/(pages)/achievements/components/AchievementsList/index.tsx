'use client'

import Badge from '@/app/(pages)/ui/Badge'
import { achievementsQuery } from '@/lib/achievementsQuery'
import { devContribution, devContributionMapper } from '@/lib/achievementsQuery/achievement.type'
import IconButton from '@/shared/ui/IconButton'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useMemo } from 'react'

import useAchievementsStore from '../../hooks/useAchievementsStore'
import './index.scss'

const PAGE_SIZE = 14

export const AchievementsList = () => {
  const { search, selectedTypes, selectedDomains, selectedTechs, orderBy, page, setPage } = useAchievementsStore()

  const filteredAchievements = useMemo(() => {
    const queryResults = achievementsQuery({
      achievementType: selectedTypes.length ? (selectedTypes[0] as any) : undefined,
      skillDomain: selectedDomains.length ? (selectedDomains as any) : undefined,
      technologies: selectedTechs.length ? (selectedTechs as any) : undefined,
      orderBy
    })
    return queryResults.filter(a => (search ? a.name.toLowerCase().includes(search.toLowerCase()) : true))
  }, [search, selectedTypes, selectedDomains, selectedTechs, orderBy])

  const paginatedAchievements = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    return filteredAchievements.slice(startIndex, endIndex)
  }, [filteredAchievements, page])

  const totalPages = useMemo(() => Math.ceil(filteredAchievements.length / PAGE_SIZE), [filteredAchievements])

  return (
    <>
      <section className='achievementsList-pagination frow'>
        <IconButton disabled={page === 1} onClick={() => setPage(page - 1)} aria-label='Página anterior'>
          <ArrowLeftIcon />
          <h4>Anterior</h4>
        </IconButton>

        <h5>
          {page} / {totalPages}
        </h5>

        <IconButton disabled={page === totalPages} onClick={() => setPage(page + 1)} aria-label='Página siguiente'>
          <h4>Siguiente</h4>
          <ArrowRightIcon />
        </IconButton>
      </section>

      <section className='achievementsList-items'>
        <div className='achievementsList-legends flex border'>
          <h3 className='text-lg font-bold'>Leyenda:</h3>
          {Object.entries(devContribution).map(([key]) => {
            const count = filteredAchievements.filter(a => a.devContribution === key).length
            const className = (devContributionMapper as any)[key]

            return (
              <div key={`dev-legend-${key}`} className='achievementsList-legend frow'>
                <div className='mfrow'>
                  <div className={`achievementsList-legend__box ${className}`} />
                  <h5 className='mfrow'>{key}</h5>
                </div>
                <h4>{String(count).padStart(2, '0')}</h4>
              </div>
            )
          })}
        </div>
        {paginatedAchievements.map((achievement, index) => (
          <Badge key={`${achievement.name}-${index}`} {...achievement} index={index} big />
        ))}
      </section>
    </>
  )
}
