import { historyJobs } from '@/constants/historyJobs'
import SliceContainer from '@/shared/components/SliceContainer'
import type { FC } from 'react'

import Job from './Job'
import './style.scss'
import './userMobile.scss'

const JobHistory: FC = () => {
  return (
    <SliceContainer className='jobHistory' reverse maxHeight={600}>
      {historyJobs.map(job => {
        return <Job key={job.name} {...job} />
      })}
    </SliceContainer>
  )
}

export default JobHistory
