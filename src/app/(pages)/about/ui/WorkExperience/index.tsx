import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import JobHistory from './JobHistory'
import LearningBadges from './LearningBadges'
import './index.scss'

const WorkExperience: FC = () => {
  return (
    <article className='workExperience' aria-label='Experiencias laborales'>
      <Title emoji='🚀' sub='Experiencias' title='Laborales' />

      <div className='workExperience-content border'>
        <JobHistory />
        <LearningBadges />
      </div>
    </article>
  )
}

export default WorkExperience
