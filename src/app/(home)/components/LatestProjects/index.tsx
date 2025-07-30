import Project from '@/app/ui/Project'
import { Image } from '@unpic/react'
import { allProjects } from 'contentlayer/generated'
import type { FC } from 'react'

const priorities = { Simple: 0, Normal: 1, Regular: 2, Alta: 3 } as const
const statuses = { 'Fase 3': 0, Completado: 1 } as const
type Priorities = keyof typeof priorities
type Statuses = keyof typeof statuses

const topProjects = allProjects
  .filter(p => typeof p.relevance === 'number')
  .sort((a, b) => {
    // 1. Relevancia descendente
    if (b.relevance !== a.relevance) return b.relevance - a.relevance

    // 2. Prioridad descendente
    const priorityA = priorities[a.priority as Priorities] ?? 0
    const priorityB = priorities[b.priority as Priorities] ?? 0
    if (priorityB !== priorityA) return priorityB - priorityA

    // 3. Estado descendente
    const statusA = statuses[a.status as Statuses] ?? 0
    const statusB = statuses[b.status as Statuses] ?? 0
    if (statusB !== statusA) return statusB - statusA

    // 4. Progreso descendente
    return b.progress - a.progress
  })
  .slice(0, 4) // Top 4 proyectos

const LatestProjects: FC = () => {
  return (
    <section className='latestProjects'>
      {topProjects.map(project => (
        <Project key={`${project.id}-project-card`} {...project} />
      ))}
    </section>
  )
}

export default LatestProjects
