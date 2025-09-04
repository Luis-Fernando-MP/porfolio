import Badge from '@/app/(pages)/ui/Badge'
import { achievementsQuery } from '@/lib/achievementsQuery'
import IconButton from '@/shared/ui/IconButton'
import { ArrowRightIcon } from 'lucide-react'
import type { FC } from 'react'

import './index.scss'

const LearningBadges: FC = () => {
  const badges = achievementsQuery({
    orderBy: ['Contribución'],
    orderDirection: 'desc'
  }).slice(0, 3)

  return (
    <article className='learningBadges'>
      <div className='learningBadges-group'>
        <div className='learningBadges-title'>
          <h2>Mis&nbsp;</h2>
          <h2 className='font2'>Certificados & Títulos</h2>
        </div>

        <p className='description'>
          Cada dia intento aprender algo nuevo. Estos son los certificados y títulos que he obtenido hasta ahora... sé que no
          serán los últimos.
        </p>

        <IconButton className='learningBadges-seeMore'>
          <ArrowRightIcon />
          <h4>Ver ahora</h4>
        </IconButton>
      </div>

      <div className='frow learningBadges-badges'>
        {badges.map((badge, i) => (
          <Badge key={badge.name} {...badge} index={i} noMapperContribution />
        ))}
      </div>
    </article>
  )
}

export default LearningBadges
