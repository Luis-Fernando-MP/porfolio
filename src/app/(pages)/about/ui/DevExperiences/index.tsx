import { developerExperiences } from '@/constants/developerExperiences'
import ShadowText from '@/shared/ui/ShadowText'
import { BriefcaseBusinessIcon } from 'lucide-react'
import type { FC } from 'react'

import DevExperience from '../DevExperience'
import './style.scss'
import './userMobile.scss'

const DevExperiences: FC = () => {
  return (
    <article className='devExperiences' aria-label='Experiencias laborales'>
      <header className='devExperiences-title'>
        <ShadowText className='certificates-shadow' role='heading' aria-level={1}>
          Experiencias
        </ShadowText>
        <div className='borderIcon' aria-hidden='true'>
          <BriefcaseBusinessIcon />
        </div>
      </header>

      <ul className='devExperiences-list'>
        {developerExperiences.map(experience => {
          return <DevExperience key={experience.company} {...experience} />
        })}
      </ul>
    </article>
  )
}

export default DevExperiences
