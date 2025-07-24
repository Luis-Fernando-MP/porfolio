import SpotlightCard from '@/shared/components/SpotlightCard'
import TransitionContent from '@/shared/components/TransitionContent'
import BasicUserDetail from '@/shared/ui/BasicUserDetail'
import { BriefcaseBusinessIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  role: string
  feedback: string
  author: string
  photo: string
  company: string
}

const Testimony: FC<Props> = ({ role, feedback, author, photo, company }) => {
  return (
    <SpotlightCard className='testimony-spotlight border'>
      <TransitionContent className='testimony'>
        <header className='testimony-header'>
          <h5>{company}</h5>
          <BriefcaseBusinessIcon className='svg-active' />
        </header>
        <p className='testimony-feedback'>&quot;{feedback}&quot;</p>
        <BasicUserDetail userName={author} photo={photo} extra={role} />
      </TransitionContent>
    </SpotlightCard>
  )
}

export default Testimony
