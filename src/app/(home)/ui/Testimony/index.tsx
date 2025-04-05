import SpotlightCard from '@/shared/components/SpotlightCard'
import BasicUserDetail from '@/shared/ui/BasicUserDetail'
import { GraduationCapIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

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
      <div className='testimony'>
        <header className='testimony-header'>
          <h5>{role}</h5>
          <GraduationCapIcon />
        </header>
        <p className='testimony-feedback'>"{feedback}"</p>
        <BasicUserDetail userName={author} photo={photo} extra={role} />
      </div>
    </SpotlightCard>
  )
}

export default Testimony
